import { MongoClient, Db } from 'mongodb';
import { createWord, deleteWord } from '../../graphql/word/mutations';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('insert', () => {
  let connection: MongoClient;
  let mongoServer: MongoMemoryServer;
  let db: Db;
  const fixtures = {
    _id: 'idToDel',
    translate: 'translate',
    word: 'word',
    userId: 'someUserId'
  };

  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoURL = await mongoServer.getConnectionString();
    const dbName = await mongoServer.getDbName();
    connection = await MongoClient.connect(mongoURL, {
      useNewUrlParser: true
    });
    db = await connection.db(dbName);
    await db.collection('words').insertOne(fixtures);
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

    const result = await createWord(null, newWord, { userId, DB: db }, null);

    const insertedUser = await db
      .collection('words')
      .findOne({ _id: newWord._id });

    expect(expectedResult).toEqual(result);
    expect(insertedUser).toEqual(result);
  });

  it('should delete a word from collection', async () => {
    const word = await db.collection('words').findOne({ _id: fixtures._id });
    expect(word).toEqual(fixtures);
    const { userId, _id } = word;

    await deleteWord(null, { _id }, { userId, DB: db }, null);
    const removedWord = await db.collection('words').findOne({ _id });
    expect(removedWord).toBeNull();
  });
});
