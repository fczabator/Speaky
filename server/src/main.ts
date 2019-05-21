import {ApolloServer, gql} from 'apollo-server';
import resolvers from './api/resolvers';
import fs from 'fs';
import path from 'path';

const typeDefsPath = path.resolve(__dirname, './api/schema.graphql');
const typeDefs = gql(fs.readFileSync(typeDefsPath).toString());

const server = new ApolloServer({resolvers, typeDefs});

server.listen().then(({url}) => console.log(`Server ready at ${url}. `));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Module disposed. '));
}
