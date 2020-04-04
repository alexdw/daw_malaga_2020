export const spam = (str) => {
    let resultado;
    resultado = str.replace(/[aeiou]/g, 'i');
    resultado = resultado.replace(/[AEIOU]/g, 'I');
    return resultado;
}