import { Resolvers } from 'src/types/apolloTypes';
import { checkIfUserIsLoggedIn } from '../../util/checks';
import { createWord, deleteWord } from './mutations';

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
    deleteWord
  }
};
