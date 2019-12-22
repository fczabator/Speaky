import { MongoClient, Db } from 'mongodb';
import { createChat } from '../../graphql/chat/mutations';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as helpers from '../../util/helpers';

describe('chat', () => {
  let connection: MongoClient;
  let mongoServer: MongoMemoryServer;
  let db: Db;
  const fixtures = [
    {
      _id: '1',
      name: 'chat1',
      wordIds: ['word-1'],
      userIds: ['someUserId']
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
  });
});
