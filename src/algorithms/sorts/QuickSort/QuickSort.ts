/**
 * @function QuickSort
 * @description: El algoritmo Quicksort es un algoritmo de ordenamiento muy utilizado y eficiente. Funciona dividiendo el arreglo en dos subarreglos y colocando el elemento pivot en su posición correcta en el arreglo ordenado. Luego, se llama recursivamente a sí mismo para ordenar cada uno de los subarreglos.
 * @param: array {number[]} - Arreglo de numeros a ordenar
 * @param: left {number} - Indice izquierdo del arreglo
 * @param: right {number} - Indice derecho del arreglo
 * @return: {number[]} - Arreglo ordenado
 */

export const QuickSort = (
  array: number[],
  left: number,
  right: number
): number[] => {
  let index;

  if (array.length > 1) {
    index = partition(array, left, right);

    if (left < index - 1) {
      QuickSort(array, left, index - 1);
    }

    if (index < right) {
      QuickSort(array, index, right);
    }
  }

  return array;
};

function partition(array: number[], left: number, right: number): number {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }

    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  return i;
}
