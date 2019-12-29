import { ObjectID } from 'mongodb';
import { resolvers } from './resolvers';
import { checkIfUserIsLoggedIn } from '../../util/checks';

export const chats: typeof resolvers.Query.chats = (root, input, context) => {
  checkIfUserIsLoggedIn(context);
  return context.DB.collection('chats')
    .find({ 'started.userId': context.userId })
    .toArray();
};
export const chat: typeof resolvers.Query.chat = (root, { _id }, context) => {
  checkIfUserIsLoggedIn(context);
  return context.DB.collection('chats').findOne({
    _id: new ObjectID(_id),
    userIds: context.userId
  });
};
