import { MongoClient, Db } from 'mongodb';
import config from '../../config';
import { createWord } from '../../graphql/word';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('insert', () => {
  let connection: MongoClient;
  let mongoServer: MongoMemoryServer;
  let db: Db;

  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoURL = await mongoServer.getConnectionString();
    const dbName = await mongoServer.getDbName();
    connection = await MongoClient.connect(mongoURL, {
      useNewUrlParser: true
    });
    db = await connection.db(dbName);
  });

  afterAll(async () => {
    await connection.close();
    await mongoServer.stop();
  });

  it('should insert a word into collection', async () => {
    const userId = 'some-user-id';

    const newWord = {
      _id: 'some-user-id',
      translate: 'Dom',
      word: 'House'
    };

    const expectedResult = {
      ...newWord,
      userId
    };

    userId: 'someUserId';
    const result = await createWord(null, newWord, { userId, DB: db }, null);

    const insertedUser = await db
      .collection('words')
      .findOne({ _id: newWord._id });

    expect(expectedResult).toEqual(result);
    expect(insertedUser).toEqual(result);
  });
});
