export function capitalize(s) {
  let first = Array.from(s);
  first = first.map((value, index) => {
      if (index%2===0) return value.toUpperCase();
      return value;
  } )

  let second = Array.from(s);
  second = second.map((value, index) => {
      if (index%2!==0) return value.toUpperCase();
      return value;
  } )

  
  return [first.join(""), second.join("")]
}