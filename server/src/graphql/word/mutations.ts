import { resolvers } from './resolvers';
import { checkIfUserIsLoggedIn } from '../../util/checks';
import {
  ApolloError,
  UserInputError,
  ForbiddenError
} from 'apollo-server-core';
import { Word } from 'src/types/apolloTypes';

export const createWord: typeof resolvers.Mutation.createWord = async (
  root,
  input,
  context
) => {
  checkIfUserIsLoggedIn(context);
  const result = await context.DB.collection<Word>('words').insertOne({
    ...input,
    userId: context.userId
  });

  if (!result.ops || !result.ops[0]) {
    throw new ApolloError('Could not create word');
  }

  return result.ops[0];
};

export const deleteWord: typeof resolvers.Mutation.deleteWord = async (
  root,
  { _id },
  context
) => {
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
};
