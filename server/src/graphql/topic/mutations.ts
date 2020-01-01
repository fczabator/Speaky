import { ApolloError } from 'apollo-server-core';
import { resolvers } from './resolvers';
import { checkIfUserIsLoggedIn } from '../../util/checks';
import { Topic } from 'src/types/apolloTypes';

export const createTopic: typeof resolvers.Mutation.createTopic = async (
  root,
  input,
  context
) => {
  checkIfUserIsLoggedIn(context);
  const result = await context.DB.collection<Topic>('topics').insertOne({
    ...input,
    userId: context.userId
  });

  if (!result.ops || !result.ops[0]) {
    throw new ApolloError('Could not create chat');
  }

  return result.ops[0];
};
