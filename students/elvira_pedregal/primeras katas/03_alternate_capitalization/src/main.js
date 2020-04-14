export function capitalize(s) {
    let first = Array.from(s).map( (value, index) =>
    {
      if (index%2===0) return value.toUpperCase();
      return value
    });

    let second = Array.from(s).map( (value, index) => 
    {
       if (index%2!==0) return value.toUpperCase();
      return value
    })

 return [first.join(""), second.join("")]
}

