/**
 Hacer que init pueda recibir cualquier número de parámetros y que devuelva la suma de estos
 */
export const init = (...params) => {
    let total = 0
    for (let i = 0; i<params.length; i++){
        total += params[i]
    }
    return total
}