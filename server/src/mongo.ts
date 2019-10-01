import { MongoClient } from 'mongodb';
import config from './config';

let client: MongoClient = null;
export const getDb = async () => {
    if (client === null) {
    // First connection, initialize the DB
        client = await MongoClient.connect(config.mongo.url, {
            useNewUrlParser: true
        });
    }

    return client.db();
};

/**
 * Promise resolves when connection with database is established
 * @param {number} retries - number of tries
 * @param {number} delay - time between retries
 * @returns {Promise<void>} - resolves when connected, throws otherwise
 */
export async function waitForConnection(retries = 3, delay = 1000) {
    let lastErr;
    for (let retry = 0; retry < retries; retry++) {
    // Try to connect with DB and remember last error
        const db = await getDb().catch(err => {
            lastErr = err;
            return null;
        });

        // Verify the connection
        if (db && client && client.isConnected()) {
            // eslint-disable-next-line no-console
            console.log('🖥️  Connected to MongoDB');
            return;
        }

        if (retry) {
            // Hide message for first failure - popular use case in development
            // eslint-disable-next-line vazco/no-console
            console.info(
                `Cannot connect to db, will retry ${retries - retry} more times`
            );
        }
        // Not yet connected, wait and try again
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    throw lastErr;
}
