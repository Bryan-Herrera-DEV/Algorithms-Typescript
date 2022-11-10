/**
 * @function: GnomeSort
 * @description: Ordena un arreglo de números de menor a mayor utilizando el algoritmo Gnome Sort
 * @param: (number[])
 * @return: (number[]) Array ya ordenado
 */

export const gnomeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }
  let i: number = 1;
  while (i < arr.length) {
    if (arr[i - 1] <= arr[i]) {
      i++; // Incrementamos el indice de laposicion si la submatriz [i-1;i] ya esta ordenado
    } else {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      i = Math.max(1, i - 1); // devolvernos al indice anterior para comprobar el intercambio
    }
  }
  return arr;
};
