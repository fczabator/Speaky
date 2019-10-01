import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';
import { typeDef as Word, resolvers as wordResolvers } from './word';
import { Resolvers } from 'apolloTypes';

const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers: Resolvers = {};

export default makeExecutableSchema({
    typeDefs: [Query, Word],
    // workaround, issue: https://github.com/prisma-labs/graphqlgen/issues/124
    resolvers: merge(resolvers, wordResolvers) as any
});
