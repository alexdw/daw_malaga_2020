export const differenceInAges = (ages) => {
let minAge = Math.min(...ages);
let maxAge = Math.max(...ages)
let diffAge = maxAge - minAge;

  return (minAge,maxAge,diffAge)
}