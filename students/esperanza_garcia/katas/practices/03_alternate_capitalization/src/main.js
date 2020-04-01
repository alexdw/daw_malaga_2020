export function capitalize(s) {
  let cadena1 = Array.from(s, (item, i) => {
    if (i%2===0) {
        return item.toUpperCase();
    }
    return item;
    
} ).join("")

let cadena2 = Array.from(s, (item, i) => {
    if (i%2!==0) {
        return item.toUpperCase();
    }
    return item;
    
} ).join("")

let resultado = [ cadena1, cadena2 ]

return resultado;
}