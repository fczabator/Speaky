import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';
import {typeDef as Word, resolvers as wordResolvers} from './word';

const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

export default makeExecutableSchema({typeDefs: [Query, Word], resolvers: merge(resolvers, wordResolvers)});
