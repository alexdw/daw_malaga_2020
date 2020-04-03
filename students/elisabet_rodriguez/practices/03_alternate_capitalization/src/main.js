export function capitalize(s) {
  let string1 = Array.from(s, (item, i) => {
    if(i%2 === 0){
      return item.toUpperCase()
    }
      return item
  }).join("");
  
  let string2 = Array.from(s, (item, i) => {
    if(i%2 !== 0){
      return item.toUpperCase()
    }
      return item
  }).join("");
  let result = [string1, string2]
  return result
}