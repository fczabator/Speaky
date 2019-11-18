import isEqual from 'lodash/isEqual';
import { generateWords } from '../../src/util/wordsGenerator';

describe('wordsGenerator', () => {
  it('should draw words for two users', () => {
    const wordIds = ['1', '2', '3', '4'];
    const drawedWords = generateWords(wordIds, 2);

    expect(drawedWords[0].length).toEqual(drawedWords[1].length);

    const allDrawedWords = drawedWords[0].concat(drawedWords[1]);

    expect(allDrawedWords.length).toEqual(wordIds.length);

    expect(isEqual(allDrawedWords.sort(), wordIds)).toBeTruthy();
  });
});
