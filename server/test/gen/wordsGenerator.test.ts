import { generateWords } from '../../src/util/wordsGenerator';

describe('wordsGenerator', () => {
  it('should draw words for two users', () => {
    const wordIds = ['1', '2', '3', '4'];
    const drawedWords = generateWords(wordIds, 2);
  });
});
