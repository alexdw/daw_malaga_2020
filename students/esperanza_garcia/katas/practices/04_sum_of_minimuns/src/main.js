export const sumOfMinimums = (arr) => {
    let totalArr= [];
    for(let i=0; i<arr.length;i++){
    totalArr.push(Math.min(...arr[i]));
    }
    return totalArr.reduce((acumulador,position)=>
    acumulador + position)
 
}