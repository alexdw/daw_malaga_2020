/*
De un array de numeros dados por arrayList, devolver el primer elemento mayor de 10
Nota. Usar findIndex
*/

export const init = (arrayList) => {
    const mayorD10 = element => element > 10;
    return arrayList[arrayList.findIndex(mayorD10)]
}