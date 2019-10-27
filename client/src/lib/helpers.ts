export const filterIfIsNotUnique = <T>(arr: T[]) => {
  return arr.filter(el => arr.filter(e => e === el).length === 1);
};
