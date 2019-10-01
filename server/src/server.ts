import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import context from './context';
import onStartup from './startup';
import config from './config';
import schema from './graphql';

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
