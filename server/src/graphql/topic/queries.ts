import { ObjectID } from 'mongodb';
import { resolvers } from './resolvers';
import { checkIfUserIsLoggedIn } from '../../util/checks';

export const topics: typeof resolvers.Query.topics = (root, input, context) => {
  checkIfUserIsLoggedIn(context);
  return context.DB.collection('topics')
    .find({ userId: context.userId })
    .toArray();
};
export const chat: typeof resolvers.Query.topic = (root, { _id }, context) => {
  checkIfUserIsLoggedIn(context);
  return context.DB.collection('topics').findOne({
    _id: new ObjectID(_id),
    userId: context.userId
  });
};
