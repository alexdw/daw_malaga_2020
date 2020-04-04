/**
 * Usar las nuevas funciones de Intl para ordenar un array con caracteres latinos
 */
export const init = (items) => {
    let itemsOrdered = items;
    itemsOrdered.sort(new Intl.Collator('es').compare)
    return itemsOrdered;
}