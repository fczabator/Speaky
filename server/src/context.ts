import {
  AuthenticationError,
  ApolloError,
  Request
} from 'apollo-server-express';
import jwt, { VerifyOptions, GetPublicKeyOrSecret } from 'jsonwebtoken';
import get from 'lodash/get';
import { getDb } from './mongo';
import config from './config';
import { Db } from 'mongodb';
import jwksClient from 'jwks-rsa';

interface TokenData {
  sub: string | null;
}

export interface Context {
  userId?: string;
  DB?: Db;
}

const verifyAsync = (
  token: string,
  getKey: GetPublicKeyOrSecret,
  options: VerifyOptions
) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, getKey, options, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
};

const getAuthInfo = async (req: Request) => {
  const authorizationHeader = get(req, 'headers.authorization');

  if (!authorizationHeader) {
    // No header, continue as not-logged in
    return {};
  }

  if (
    typeof authorizationHeader !== 'string' ||
    !authorizationHeader.startsWith('Bearer ')
  ) {
    // The header is malformed
    throw new AuthenticationError('Invalid authorization header');
  }

  const token = authorizationHeader.replace(/^Bearer /, '');

  try {
    const client = jwksClient({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.auth.domain}/.well-known/jwks.json`
    });

    const getKey: GetPublicKeyOrSecret = (header, callback) => {
      client.getSigningKey(header.kid, (err: any, key: any) => {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
      });
    };

    const data = await verifyAsync(token, getKey, {
      maxAge: '30 days',
      audience: config.auth.audience,
      issuer: `https://${config.auth.domain}/`
    });

    return {
      userId: (<TokenData>data).sub
    };
  } catch (e) {
    console.log('e', e);
    if (get(req, 'body.operationName') === 'Login') {
      return {};
    }
    throw new AuthenticationError('Invalid token');
  }
};

export default async function context({
  req
}: {
  req: Request;
}): Promise<Context> {
  let DB = null;

  try {
    // Establish a database connection
    DB = await getDb();
  } catch (e) {
    throw new ApolloError('Cannot connect to DB');
  }
  const authInfo = await getAuthInfo(req);

  return {
    DB,
    ...authInfo
  };
}
