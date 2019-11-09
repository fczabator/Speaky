import gql from 'graphql-tag';
import { Resolvers } from '../types/apolloTypes';
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
    createWord(word: String!, translate: String!): Word!
    deleteWord(_id: String!): Boolean!
  }
  type Word {
    _id: ID!
    word: String!
    translate: String!
  }
`;

export const resolvers: Resolvers = {
  Query: {
    words: (root, input, context) => {
      return context.DB.collection('words')
        .find()
        .toArray();
    },
    word: (root, { _id }, context) => {
      return context.DB.collection('words').findOne({ _id });
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

      return result.ops[0];
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
