import { Resolvers } from 'src/types/apolloTypes';
import { checkIfUserIsLoggedIn } from 'src/util/checks';
import { createWord } from './mutations';
import {
  ApolloError,
  UserInputError,
  ForbiddenError
} from 'apollo-server-core';

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
    createWord,
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
