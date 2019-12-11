export const filterIfIsNotUnique = <T>(arr: T[]) => {
  return arr.filter(el => arr.filter(e => e === el).length === 1);
};

// TODO: figure out the typing
// export const split = <T>(list: T[], predicate: (el: T) => boolean) => {
//   return list.reduce(
//     ([truthy, falsy], curr) => {
//       if (predicate(curr)) {
//         return [[...truthy, curr], falsy];
//       } else {
//         return [truthy, [...falsy, curr]];
//       }
//     },
//     [[], []] as [T[], T[]]
//   );
// };
