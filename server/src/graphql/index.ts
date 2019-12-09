import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLDate, GraphQLDateTime, GraphQLTime } from 'graphql-iso-date';
import { DateTimeResolver, URLResolver } from 'graphql-scalars';
import merge from 'lodash/merge';
import { typeDef as Word, resolvers as wordResolvers } from './word';
import { typeDef as Chat, resolvers as chatResolvers } from './chat';
import { typeDef as Topic, resolvers as topicResolvers } from './topic';
import { Resolvers } from '../types/apolloTypes';
import gql from 'graphql-tag';

const Query = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  scalar DateTime
`;

const resolvers: Resolvers = {
  DateTime: DateTimeResolver
};

export default makeExecutableSchema({
  typeDefs: [Query, Word, Chat, Topic],
  // workaround, issue: https://github.com/prisma-labs/graphqlgen/issues/124
  resolvers: merge(
    resolvers,
    wordResolvers,
    chatResolvers,
    topicResolvers
  ) as any
});
