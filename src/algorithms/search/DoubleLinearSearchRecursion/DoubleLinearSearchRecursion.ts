/**
 * @function DoubleLinearSearchRecursion
 * @description Una ligera mejora con respecto a la típica búsqueda lineal.
 *
 * @param: {number[]} list_data - la lista que se va a buscar
 * @param: {number} clave - la clave a buscar
 * @param: {number} left - índice del primer elemento
 * @param: {number} right - el índice del último elemento
 * @return: {number} - el índice del valor de la clave si se encuentra, -1 en caso contrario.
 */

export const DoubleLinearSearchRecursion = (
  list_data: number[],
  clave: number,
  left: number = 0,
  right: number = 0
): number => {
  right = right || list_data.length - 1;
  if (left > right) {
    return -1;
  } else if (list_data[left] === clave) {
    return left;
  } else if (list_data[right] === clave) {
    return right;
  } else {
    return DoubleLinearSearchRecursion(list_data, clave, left + 1, right - 1);
  }
};
