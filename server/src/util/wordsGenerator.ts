import shuffle from 'lodash/shuffle';

export const generateWords = (
  wordIds: string[],
  numberOfUsers: number
): string[][] => {
  return shuffle(wordIds).reduce((acc, curr, i) => {
    const user = i % numberOfUsers;
    acc[user] = curr;
    return acc;
  }, []);
};
