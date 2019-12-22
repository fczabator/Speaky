import { resolvers } from './resolvers';
import { checkIfUserIsLoggedIn } from '../../util/checks';

export const word: typeof resolvers.Query.word = (root, { _id }, context) => {
  checkIfUserIsLoggedIn(context);
  return context.DB.collection('words').findOne({
    _id,
    userId: context.userId
  });
};

export const words: typeof resolvers.Query.words = (root, input, context) => {
  checkIfUserIsLoggedIn(context);
  return context.DB.collection('words')
    .find({ userId: context.userId })
    .toArray();
};
