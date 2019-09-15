export default {
  apollo: {
    mocks: process.env.APOLLO_MOCKS !== 'false',
    playground: process.env.APOLLO_PLAYGROUND !== 'false',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'nope',
  },
  mongo: {
    retries: +process.env.MONGO_RETRIES || 5,
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/speaky',
  },
  server: {
    port: process.env.SERVER_PORT || 3333,
  },
};
