export const sumOfMinimums = (arr) => {
  let total = 0
    for(let i=0; i<arr.length;i++){
      let minimum = arr[i][0]
      for(let j=0; j<arr[i].length;j++){
        minimum = Math.min(minimum, arr[i][j])
      }
    total += minimum
   }
  return total
}