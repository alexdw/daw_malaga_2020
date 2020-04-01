export const differenceInAges = (ages) => {
  let arr = [82, 15, 6, 38, 35];
  let old = Math.max(...ages)
  let young = Math.min(...ages)
     return [young, old, old-young]
}

