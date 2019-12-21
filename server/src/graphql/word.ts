import gql from 'graphql-tag';
import { Resolvers, Word, Topic } from '../types/apolloTypes';
import {
  ApolloError,
  UserInputError,
  ForbiddenError
} from 'apollo-server-core';
import { checkIfUserIsLoggedIn } from '../util/checks';

export const typeDef = gql`
  extend type Query {
    words: [Word!]!
    word(_id: String!): Word
  }
  extend type Mutation {
    createWord(word: String!, translate: String): Word!
    deleteWord(_id: String!): Boolean!
  }
  type Word {
    _id: ID!
    learned: Boolean!
    translate: String
    userId: ID!
    word: String!
  }
`;

export const resolvers: Resolvers = {
  Word: {
    learned: async ({ _id }, input, context) => {
      const numberOfChatsWhereWordIsUsed = await context.DB.collection(
        'chat'
      ).countDocuments({
        userIds: context.userId,
        wordIds: _id
      });

      return !!numberOfChatsWhereWordIsUsed;
    }
  },
  Query: {
    words: (root, input, context) => {
      checkIfUserIsLoggedIn(context);
      return context.DB.collection('words')
        .find({ userId: context.userId })
        .toArray();
    },
    word: (root, { _id }, context) => {
      checkIfUserIsLoggedIn(context);
      return context.DB.collection('words').findOne({
        _id,
        userId: context.userId
      });
    }
  },
  Mutation: {
    createWord: async (root, input, context) => {
      checkIfUserIsLoggedIn(context);
      const result = await context.DB.collection('words').insertOne({
        ...input,
        userId: context.userId
      });

      if (!result.ops || !result.ops[0]) {
        throw new ApolloError('Could not create word');
      }

      return <Word>(<unknown>result.ops[0]);
    },
    deleteWord: async (root, { _id }, context) => {
      checkIfUserIsLoggedIn(context);
      const word = await context.DB.collection('words').findOne({ _id });
      if (!word) {
        throw new UserInputError('The word with specified id does not exist');
      }
      if (word.userId !== context.userId) {
        throw new ForbiddenError('Word does not belong to the user');
      }
      const result = await context.DB.collection('words').deleteOne({
        _id
      });
      if (!result.deletedCount) {
        throw new ApolloError('Could not delete word');
      }
      return true;
    }
  }
};
