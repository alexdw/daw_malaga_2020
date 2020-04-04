/*
	[82, 15, 6, 38, 35]) ====> [6, 82, 76]
*/
export const differenceInAges = (ages) => {
	let minAge = Math.min(...ages);
	let maxAge = Math.max(...ages)
	let diffAge = maxAge - minAge;

	return [minAge,maxAge,diffAge]
}