// [
// 	[7, 9, 8, 6, 2], 
// 	[6, 3, 5, 4, 3], 
// 	[5, 8, 7, 4, 5]
// ]

function compare(a,b){
	return a - b
}

export const sumOfMinimums = (arr) => {
   let arrayMapped = arr.map( value => value.sort(compare)[0] );
   let total = arrayMapped.reduce( (acummulated, current) => acummulated + current);
   return total;
}