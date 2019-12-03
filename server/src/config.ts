export default {
  apollo: {
    mocks: 'false',
    playground: process.env.APOLLO_PLAYGROUND !== 'false'
  },
  mongo: {
    retries: +process.env.MONGO_RETRIES || 5,
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/speaky'
  },
  server: {
    port: process.env.SERVER_PORT || 3333
  },
  auth: {
    domain: process.env.AUTH_DOMAIN || 'dev-0xvvzv6k.eu.auth0.com',
    audience: process.env.AUTH_AUDIENCE || 'http://localhost:3333'
  }
};
