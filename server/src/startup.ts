import config from './config';
import { waitForConnection } from './mongo';

export default async () => {
  // Make sure that database is connected before anything else
  await waitForConnection(config.mongo.retries);
};
