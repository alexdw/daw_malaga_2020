function compare(a,b){
  return a-b
}
export const sumOfMinimums = (arr) => {
let arrayMapped = arr.map(value=> value.sort(compare)[0]);
let total = arrayMapped.reduce((acum, current) => acum + current);
return total;
}
