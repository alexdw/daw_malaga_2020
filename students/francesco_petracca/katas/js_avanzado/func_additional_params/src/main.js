/**
 Hacer que init pueda recibir cualquier número de parámetros y que devuelva la suma de estos
 */
export const init = (params) => {
    let total;
    let paramsArr = [params];
    
    total = paramsArr.reduce(function(a, b){return a + b});
    return total
}