/**
 Hacer que init pueda recibir cualquier número de parámetros y que devuelva la suma de estos
 */
 export const init = (params) => {
    let total;
    let paramsArr = [params];
    /* for(let i=0; i<params;i++){
        paramsArr.push(params[i])
    } */
    total = paramsArr.reduce(function(a, b){return a + b});
    return total
} 