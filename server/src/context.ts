import {
    AuthenticationError,
    ApolloError,
    Request
} from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import get from 'lodash/get';
import { getDb } from './mongo';
import config from './config';

interface TokenData {
    userId: string | null;
}

export default async function context({ req }: { req: Request }) {
    const ctx = {};

    const authorizationHeader = get(req, 'headers.authorization');

    if (!authorizationHeader) {
    // No header, continue as not-logged in
        return ctx;
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
        Object.assign(ctx, {
            userId: (<TokenData>data).userId
        });
    } catch (e) {
        if (get(req, 'body.operationName') === 'Login') {
            // Allow invalid/expired token for the login request, just ignore it
            return ctx;
        }
        throw new AuthenticationError('Invalid token');
    }

    try {
    // Establish a database connection
        const DB = await getDb();
        Object.assign(ctx, { DB });
    } catch (e) {
        throw new ApolloError('Cannot connect to DB');
    }

    return ctx;
}
