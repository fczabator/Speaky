import shuffle from 'lodash/shuffle';

export const generateWords = (
  wordIds: string[],
  numberOfUsers: number
): string[][] => {
  const initial = [...Array(numberOfUsers)].map(() => []);
  return shuffle(wordIds).reduce((acc, curr, i) => {
    const user = i % numberOfUsers;
    acc[user].push(curr);
    return acc;
  }, initial);
};
