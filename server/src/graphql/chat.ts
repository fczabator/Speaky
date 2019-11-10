import gql from 'graphql-tag';
import { ObjectID } from 'mongodb';
import { Resolvers } from '../types/apolloTypes';
import { ApolloError, UserInputError } from 'apollo-server-core';
import { checkIfUserIsLoggedIn } from '../util/checks';
import { mapToObjectId, getInviteCode } from '../util/helpers';

export const typeDef = gql`
  extend type Query {
    chats: [Chat!]!
    chat(_id: String!): Chat
  }
  extend type Mutation {
    createChat(name: String!, wordIds: [ID!]!, topicIds: [ID!]): Chat!
    addWordsToChat(_id: ID!, wordIds: [ID!]!): Boolean!
    removeWordsFromChat(_id: ID!, wordIds: [ID!]!): Boolean!
    inviteUserToChat(_id: ID!, userId: ID!): Boolean!
    joinChat(inviteCode: String!): Chat!
  }
  type Chat {
    _id: ID!
    name: String!
    wordIds: [ID!]!
    words: [Word!]!
    topics: [Topic!]
    topicIds: [ID!]!
    userIds: [ID!]!
    inviteCode: String!
  }
`;

export const resolvers: Resolvers = {
  Chat: {
    words: (root, input, context) => {
      return context.DB.collection('words')
        .find({
          _id: { $in: mapToObjectId(root.wordIds) }
        })
        .toArray();
    }
  },
  Query: {
    chats: (root, input, context) => {
      checkIfUserIsLoggedIn(context);
      return context.DB.collection('chats')
        .find({ userIds: context.userId })
        .toArray();
    },
    chat: (root, { _id }, context) => {
      checkIfUserIsLoggedIn(context);
      return context.DB.collection('chats').findOne({
        _id: new ObjectID(_id),
        userIds: context.userId
      });
    }
  },
  Mutation: {
    createChat: async (root, input, context) => {
      checkIfUserIsLoggedIn(context);
      const result = await context.DB.collection('chats').insertOne({
        ...input,
        userIds: [context.userId],
        inviteCode: getInviteCode()
      });

      if (!result.ops || !result.ops[0]) {
        throw new ApolloError('Could not create chat');
      }

      return result.ops[0];
    },
    addWordsToChat: async (root, { _id, wordIds }, context) => {
      checkIfUserIsLoggedIn(context);
      const { modifiedCount } = await context.DB.collection('chats').updateOne(
        { _id: new ObjectID(_id) },
        { $push: { wordIds: { $each: wordIds } } }
      );
      return !!modifiedCount;
    },
    removeWordsFromChat: async (root, { _id, wordIds }, context) => {
      checkIfUserIsLoggedIn(context);
      const { modifiedCount } = await context.DB.collection('chats').updateOne(
        { _id: new ObjectID(_id) },
        { $pull: { wordIds: { $in: wordIds } } }
      );
      return !!modifiedCount;
    },
    inviteUserToChat: async (root, { _id, userId }, context) => {
      checkIfUserIsLoggedIn(context);
      const { modifiedCount } = await context.DB.collection('chats').updateOne(
        { _id: new ObjectID(_id) },
        { $push: { userIds: { $each: userId } } }
      );
      return !!modifiedCount;
    },
    joinChat: async (root, { inviteCode }, context) => {
      checkIfUserIsLoggedIn(context);
      const result = await context.DB.collection('chats').findOneAndUpdate(
        { inviteCode, userIds: { $ne: context.userId } },
        { $push: { userIds: context.userId } }
      );
      if (!result.value) {
        throw new UserInputError('Wrong invitation code');
      }

      return result.value;
    }
  }
};
