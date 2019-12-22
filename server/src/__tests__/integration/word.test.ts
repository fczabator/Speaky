import { MongoClient, Db } from 'mongodb';
import { createWord, deleteWord } from '../../graphql/word/mutations';
import { word as getWord, words as getWords } from '../../graphql/word/queries';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('insert', () => {
  let connection: MongoClient;
  let mongoServer: MongoMemoryServer;
  let db: Db;
  const fixtures = [
    {
      _id: '1',
      translate: 'translate',
      word: 'word',
      userId: 'someUserId'
    },
    {
      _id: '2',
      translate: 'dom',
      word: 'house',
      userId: 'someUserId2'
    }
  ];

  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoURL = await mongoServer.getConnectionString();
    const dbName = await mongoServer.getDbName();
    connection = await MongoClient.connect(mongoURL, {
      useNewUrlParser: true
    });
    db = await connection.db(dbName);
    await db.collection('words').insertMany(fixtures);
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
    const wordToDel = fixtures[0];
    const word = await db.collection('words').findOne({ _id: wordToDel._id });
    expect(word).toEqual(wordToDel);
    const { userId, _id } = word;

    await deleteWord(null, { _id }, { userId, DB: db }, null);
    const removedWord = await db.collection('words').findOne({ _id });
    expect(removedWord).toBeNull();
  });

  it('should query a word', async () => {
    const wordToQuery = fixtures[1];
    const context = { userId: wordToQuery.userId, DB: db };

    const otherUserWord = await getWord(
      null,
      { _id: wordToQuery._id },
      { ...context, userId: 'incorrectUserId' },
      null
    );
    expect(otherUserWord).toBeNull();

    const word = await getWord(null, { _id: wordToQuery._id }, context, null);

    expect(word).toEqual(wordToQuery);
  });

  it('should query words', async () => {
    const wordToQuery = fixtures[1];
    const context = { userId: wordToQuery.userId, DB: db };

    const otherUserWords = await getWords(
      null,
      { _id: wordToQuery._id },
      { ...context, userId: 'incorrectUserId' },
      null
    );
    expect(otherUserWords).toEqual([]);

    const word = await getWords(null, { _id: wordToQuery._id }, context, null);

    expect(word).toEqual([wordToQuery]);
  });
});
