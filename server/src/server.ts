import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

import context from './context';
import onStartup from './startup';
import config from './config';
import schema from './graphql';

const authConfig = {
  domain: 'dev-0xvvzv6k.eu.auth0.com',
  audience: 'Speaky-API'
};

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ['RS256']
});

const server = new ApolloServer({
  context,
  introspection: !!config.apollo.playground,
  mockEntireSchema: false,
  mocks: !!config.apollo.mocks,
  playground: !!config.apollo.playground,
  tracing: !!config.apollo.playground,
  schema
});

const app = express();

server.applyMiddleware({
  app,
  cors: {
    origin: true,
    credentials: true
  }
});

onStartup()
  .then(() => app.listen(config.server.port))
  .then(() => {
    // eslint-disable-next-line no-console
    console.log(
      `🚀 Server ready at port ${config.server.port}${server.graphqlPath}`
    );
  }) // eslint-disable-next-line no-console
  .catch(e => console.log('Server startup error', e));
