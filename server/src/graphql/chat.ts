import gql from 'graphql-tag';
import { ObjectID } from 'mongodb';
import { Resolvers } from '../types/apolloTypes';
import { ApolloError } from 'apollo-server-core';

const mapToObjectId = (ids: string[]) => ids.map(id => new ObjectID(id));

export const typeDef = gql`
  extend type Query {
    chats: [Chat!]!
    chat(_id: String!): Chat
  }
  extend type Mutation {
    createChat(name: String!, wordIds: [String!]!, topicIds: [String!]): Chat!
    removeWordsFromChat(_id: String!, wordIds: [String!]!): Boolean!
  }
  type Chat {
    _id: ID!
    name: String!
    wordIds: [String!]!
    words: [Word!]!
    topics: [Topic!]
  }
`;

export const resolvers: Resolvers = {
  Chat: {
    words: (root, input, context) => {
      console.log('root', root);
      return context.DB.collection('words')
        .find({
          _id: { $in: mapToObjectId(root.wordIds) }
        })
        .toArray();
    }
  },
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
    },
    removeWordsFromChat: async (root, { _id, wordIds }, context) => {
      const { modifiedCount } = await context.DB.collection('chats').updateOne(
        { _id: new ObjectID(_id) },
        { $pull: { wordIds: { $in: wordIds } } }
      );
      return !!modifiedCount;
    }
  }
};
