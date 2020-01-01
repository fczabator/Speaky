import { makeExecutableSchema } from 'graphql-tools';
import { DateTimeResolver } from 'graphql-scalars';
import merge from 'lodash/merge';
import { resolvers as wordResolvers } from './word';
import { resolvers as chatResolvers } from './chat';
import { resolvers as topicResolvers } from './topic';
import { typeDef as Chat } from './chat/schema';
import { typeDef as Word } from './word/schema';
import { typeDef as Topic } from './topic/schema';
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
