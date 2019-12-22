import { Resolvers } from 'src/types/apolloTypes';
import * as queries from './queries';
import * as mutations from './mutations';

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
    ...queries
  },
  Mutation: {
    ...mutations
  }
};
