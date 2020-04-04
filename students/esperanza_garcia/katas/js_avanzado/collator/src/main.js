/**
 * Usar las nuevas funciones de Intl para ordenar un array con caracteres latinos
 */
export const init = (items) => {
    let itemsOrdered = items;
    itemsOrdered.sort((Intl(es-es)))
    return itemsOrdered;
}