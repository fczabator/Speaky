import {
    AuthenticationError,
    ApolloError,
    Request
} from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import get from 'lodash/get';
import { getDb } from './mongo';
import config from './config';
import { Db } from 'mongodb';

interface TokenData {
    userId: string | null;
}

export interface Context {
    userId?: string;
    DB?: Db;
}

const getAuthInfo = (req: Request) => {
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
    // Verify the token
        const data = jwt.verify(token, config.jwt.secret, { maxAge: '30 days' });

        // Add tokens to the context and provide users data
        return {
            userId: (<TokenData>data).userId
        };
    } catch (e) {
        if (get(req, 'body.operationName') === 'Login') {
            // Allow invalid/expired token for the login request, just ignore it
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

    return {
        DB,
        ...getAuthInfo(req)
    };
}
