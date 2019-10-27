import gql from 'graphql-tag';
import { ObjectID } from 'mongodb';
import { Resolvers } from '../types/apolloTypes';
import { ApolloError } from 'apollo-server-core';

export const typeDef = gql`
  extend type Query {
    chats: [Chat!]!
    chat(_id: String!): Chat
  }
  extend type Mutation {
    createChat(name: String!, wordIds: [String!]!, topicIds: [String!]): Chat!
  }
  type Chat {
    _id: ID!
    name: String!
    words: [Word!]!
    topics: [Topic!]
  }
`;

export const resolvers: Resolvers = {
  Query: {
    chats: (root, input, context) => {
      return context.DB.collection('chats')
        .find()
        .toArray();
    },
    chat: (root, { _id }, context) => {
      return context.DB.collection('chats').findOne({ _id: new ObjectID(_id) });
    }
  },
  Mutation: {
    createChat: async (root, input, context) => {
      const result = await context.DB.collection('chats').insertOne({
        ...input
      });

      if (!result.ops || !result.ops[0]) {
        throw new ApolloError('Could not create chat');
      }

      return result.ops[0];
    }
  }
};
