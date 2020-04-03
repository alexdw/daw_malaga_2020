/*
De un array de numeros dados por arrayList, devolver el primer elemento mayor de 10
Nota. Usar findIndex
*/

export const init = (arrayList) => {
    const isLargerNumber = (num) => num > 10
    const elNumero = arrayList.findIndex(isLargerNumber)
    return arrayList[elNumero]
}