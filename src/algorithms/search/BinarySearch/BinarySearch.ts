/**
 * @function BinarySearch
 * @description algoritmo de búsqueda binaria (implementaciones iterativas y recursivas) para una matriz ordenada.
 * El algoritmo busca un valor específico en una matriz ordenada en tiempo logarítmico.
 * Repetidamente divide por la mitad la porción de la lista que podría contener el ítem,
 *  hasta que ha reducido los posibles índices a sólo uno.
 *
 * @param: {number[]} array - Lista ordenada de numeros
 * @param: {number} target - Numero a buscar
 * @return: {number} - índice del número de destino en la lista, o -1 si no se encuentra
 */

export const binarySearchIterative = (array: number[], target: number): number => {
  if (array.length === 0) {return -1;}

  // declarar punteros para los índices de inicio, medio y final
  let start = 0,
      end = array.length - 1,
      middle = (start + end) >> 1;

  // asegúrese de que el objetivo está dentro de los límites de la matriz
  if (target < array[start] || target > array[end]) {return -1;}

  while (array[middle] !== target && start <= end) {
      // si el objetivo es menor que el valor medio, mueve el puntero final para que sea medio -1 para reducir el espacio de búsqueda
      // en caso contrario, mueve el puntero de inicio para que sea medio + 1
      if (target < array[middle])
          {end = middle - 1;}
      else
          {start = middle + 1;}
      // volver a declarar el índice medio cuando la ventana de búsqueda cambia
      middle = (start + end) >> 1;
  }
  // devuelve el índice medio si es igual al objetivo
  return array[middle] === target ? middle : -1;
};
