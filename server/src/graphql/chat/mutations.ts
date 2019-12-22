import { ObjectID } from 'mongodb';
import { ApolloError, UserInputError } from 'apollo-server-core';
import { resolvers } from './resolvers';
import { Chat } from '../../types/apolloTypes';
import { checkIfUserIsLoggedIn } from '../../util/checks';
import { getInviteCode } from '../../util/helpers';
import { generateWords } from '../../util/wordsGenerator';

export const createChat: typeof resolvers.Mutation.createChat = async (
  root,
  input,
  context
) => {
  checkIfUserIsLoggedIn(context);
  const result = await context.DB.collection('chats').insertOne({
    ...input,
    userIds: [context.userId],
    inviteCode: getInviteCode(),
    started: [],
    completedWordIds: []
  });

  if (!result.ops || !result.ops[0]) {
    throw new ApolloError('Could not create chat');
  }

  return <Chat>(<unknown>result.ops[0]);
};

export const addWordsToChat: typeof resolvers.Mutation.addWordsToChat = async (
  root,
  { _id, wordIds },
  context
) => {
  checkIfUserIsLoggedIn(context);
  const { modifiedCount } = await context.DB.collection('chats').updateOne(
    { _id: new ObjectID(_id) },
    { $push: { wordIds: { $each: wordIds } } }
  );
  return !!modifiedCount;
};

export const removeWordsFromChat: typeof resolvers.Mutation.removeWordsFromChat = async (
  root,
  { _id, wordIds },
  context
) => {
  checkIfUserIsLoggedIn(context);
  const { modifiedCount } = await context.DB.collection('chats').updateOne(
    { _id: new ObjectID(_id) },
    { $pull: { wordIds: { $in: wordIds } } }
  );
  return !!modifiedCount;
};

export const inviteUserToChat: typeof resolvers.Mutation.inviteUserToChat = async (
  root,
  { _id, userId },
  context
) => {
  checkIfUserIsLoggedIn(context);
  const { modifiedCount } = await context.DB.collection('chats').updateOne(
    { _id: new ObjectID(_id) },
    { $push: { userIds: userId } }
  );
  return !!modifiedCount;
};

export const joinChat: typeof resolvers.Mutation.joinChat = async (
  root,
  { inviteCode },
  context
) => {
  checkIfUserIsLoggedIn(context);
  const result = await context.DB.collection('chats').findOneAndUpdate(
    { inviteCode, userIds: { $ne: context.userId } },
    { $push: { userIds: context.userId } }
  );
  if (!result.value) {
    throw new UserInputError('Wrong invitation code');
  }

  return result.value;
};

export const startChat: typeof resolvers.Mutation.startChat = async (
  root,
  { _id },
  context
) => {
  checkIfUserIsLoggedIn(context);
  const result = await context.DB.collection('chats').findOneAndUpdate(
    {
      _id: new ObjectID(_id),
      userIds: context.userId,
      started: { $not: { $elemMatch: { userId: context.userId } } }
    },
    {
      $push: {
        started: {
          date: new Date(),
          userId: context.userId,
          wordIds: []
        }
      }
    },
    { returnOriginal: false }
  );
  if (!result.value) {
    throw new UserInputError('Cannot start the chat');
  }
  if (
    result.value.started &&
    result.value.started.length === result.value.userIds.length
  ) {
    const { started, wordIds } = result.value;
    const drawedWords = generateWords(wordIds, started.length);

    // TODO: aggregation
    await Promise.all(
      drawedWords.map((wordsSet, index) =>
        context.DB.collection('chats').updateOne(
          { _id: new ObjectID(_id) },
          { $set: { [`started.${index}.wordIds`]: wordsSet } }
        )
      )
    );
  }

  return result.value;
};

export const completeChatWord: typeof resolvers.Mutation.completeChatWord = async (
  root,
  { _id, wordId },
  context
) => {
  checkIfUserIsLoggedIn(context);
  const result = await context.DB.collection('chats').findOneAndUpdate(
    {
      _id: new ObjectID(_id),
      started: { $elemMatch: { userId: context.userId } }
    },
    { $push: { completedWordIds: wordId } }
  );

  if (!result.value) {
    throw new UserInputError('Cannot complete the word in chat');
  }

  return result.value;
};
