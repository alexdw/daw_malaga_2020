export const differenceInAges = (ages) => {
    let minAge = Math.min(...ages);
    let maxAge = Math.max(...ages);
    let diffage = maxAge - minAge;

    return [minAge,maxAge,diffage];
}