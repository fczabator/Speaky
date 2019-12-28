import { MongoClient, Db, ObjectID } from 'mongodb';
import {
  createChat,
  addWordsToChat,
  startChat,
  completeChatWord
} from '../../graphql/chat/mutations';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as helpers from '../../util/helpers';

describe('chat', () => {
  let connection: MongoClient;
  let mongoServer: MongoMemoryServer;
  let db: Db;
  const fixtures = [
    {
      _id: new ObjectID().toHexString(),
      name: 'chat1',
      wordIds: ['word-1', 'word-2'],
      userIds: ['someUserId', 'otherUserId']
    }
  ];

  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoURL = await mongoServer.getConnectionString();
    const dbName = await mongoServer.getDbName();
    connection = await MongoClient.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = await connection.db(dbName);
    await db.collection('chats').insertMany(fixtures);
  });

  afterAll(async () => {
    await connection.close();
    await mongoServer.stop();
  });

  it('should insert a chat into collection', async () => {
    const spy = jest.spyOn(helpers, 'getInviteCode');
    spy.mockReturnValue('12345');
    const userId = 'some-user-id';

    const newChat = {
      _id: '2',
      name: 'chat1',
      wordIds: ['word-1'],
      userIds: ['someUserId']
    };

    const expectedResult = {
      ...newChat,
      started: [] as string[],
      completedWordIds: [] as string[],
      userIds: [userId],
      inviteCode: '12345'
    };

    const result = await createChat(null, newChat, { userId, DB: db }, null);

    const insertedUser = await db
      .collection('chats')
      .findOne({ _id: newChat._id });

    expect(expectedResult).toEqual(result);
    expect(insertedUser).toEqual(result);

    spy.mockRestore();
  });

  it('should add words to chat', async () => {
    const chat = fixtures[0];
    const context = { DB: db, userId: chat.userIds[0] };
    const chatBefore = await db.collection('chats').findOne({ _id: chat._id });
    const wordIds = ['1', '2', '3'];

    const result = await addWordsToChat(
      null,
      { _id: chat._id, wordIds },
      context,
      null
    );

    expect(result).toBeTruthy();

    const updatedChat = await db.collection('chats').findOne({ _id: chat._id });

    expect(updatedChat).toEqual({
      ...chatBefore,
      wordIds: [...chatBefore.wordIds, ...wordIds]
    });
  });

  it('should start chat', async () => {
    const chat = fixtures[0];
    const [firstUserId, secondUserId] = chat.userIds;

    const firstResult = await startChat(
      null,
      { _id: chat._id },
      { DB: db, userId: firstUserId },
      null
    );

    const afterFirstStart = await db
      .collection('chats')
      .findOne({ _id: chat._id });

    expect(afterFirstStart).toEqual(firstResult);
    expect(afterFirstStart.started[0].userId).toEqual(firstUserId);

    const secondResult = await startChat(
      null,
      { _id: chat._id },
      { DB: db, userId: secondUserId },
      null
    );

    const afterSecondStart = await db
      .collection('chats')
      .findOne({ _id: chat._id });

    expect(afterSecondStart).toEqual(secondResult);
    expect(afterSecondStart.started[1].userId).toEqual(secondUserId);
    expect(afterSecondStart.started[0].wordIds.length).toBeGreaterThan(0);
    expect(afterSecondStart.started[1].wordIds.length).toBeGreaterThan(0);
  });

  // it('should mark word as completed in chat', async () => {
  //   const chat = fixtures[0];
  //   const [firstUserId] = chat.userIds;

  //   const startedChat = await startChat(
  //     null,
  //     { _id: chat._id },
  //     { DB: db, userId: firstUserId },
  //     null
  //   );
  //   console.log('startedChat', startedChat);

  //   const result = await completeChatWord(
  //     null,
  //     { _id: chat._id, wordId: startedChat.started[0].wordIds[0] },
  //     { DB: db, userId: startedChat.started[0].userId },
  //     null
  //   );
  //   console.log('result', result);

  //   expect(result.completedWordIds).toContain(
  //     startedChat.started[0].wordIds[0]
  //   );
  // });
});
