import { Resolvers } from '../../types/apolloTypes';
import { mapToObjectId } from '../../util/helpers';
import * as queries from './queries';
import * as mutations from './mutations';

export const resolvers: Resolvers = {
  Chat: {
    words: ({ wordIds }, input, context) => {
      return context.DB.collection('words')
        .find({
          _id: { $in: mapToObjectId(wordIds) }
        })
        .toArray();
    },
    isCompleted: ({ wordIds, completedWordIds }, input, context) => {
      return wordIds.length && completedWordIds.length === wordIds.length;
    }
  },
  StartedChat: {
    words: ({ wordIds }, input, context) => {
      return context.DB.collection('words')
        .find({
          _id: { $in: mapToObjectId(wordIds) }
        })
        .toArray();
    }
  },
  Query: {
    ...queries
  },
  Mutation: {
    ...mutations
  }
};
