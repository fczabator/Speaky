import { MongoClient, Db } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { createTopic } from '../../graphql/topic/mutations';

describe('topics', () => {
  let connection: MongoClient;
  let mongoServer: MongoMemoryServer;
  let db: Db;
  const fixtures = [
    {
      _id: '1',
      name: 'Interview',
      userId: 'someUserId'
    },
    {
      _id: '2',
      name: 'Vacation',
      userId: 'someUserId2'
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
    await db.collection('words').insertMany(fixtures);
  });

  afterAll(async () => {
    await connection.close();
    await mongoServer.stop();
  });

  it('should create a new topic', async () => {
    const userId = 'someUserId';

    const newTopic = {
      _id: 'new-topic',
      name: 'Some new topic'
    };

    const insertResult = await createTopic(
      null,
      newTopic,
      { userId, DB: db },
      null
    );
    expect(insertResult).toEqual({ ...newTopic, userId });

    const newTopicInDB = await db
      .collection('topics')
      .findOne({ _id: newTopic._id });

    expect(insertResult).toEqual(newTopicInDB);
  });
});
