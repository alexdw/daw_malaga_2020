export function capitalize(s) {

  let par = Array.from(s).map((value, index) => {
    if (index%2===0) return value.toUpperCase();
  });

  let impar = Array.from(s).map((value, index) => {
    if (index % 2!== 0) return value.toUpperCase();
    return value;
});

return [par.join(""), impar.join("")]
}


