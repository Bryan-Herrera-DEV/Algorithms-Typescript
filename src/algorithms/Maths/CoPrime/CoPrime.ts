/**
 * @function CoPrime
 * @description Es un algoritmo matemático que nos permite validar si los factores primos de dos números tienen un factor común entre si, el cual es el 1.
 * Tambien se le conoce como 'Primos Relativos' y podemos hallarlo con sus factores primos o con su MCD.
 * @param: {number} firstNumber - Primer número a comparar.
 * @param: {number} secondNumber - Segundo número a comparar.
 * @return: {boolean} - Devuelve true si los números son 'Co-Primos', false en caso contrario.
 */

// Aqui haremos uso del Algoritmos Euclides para encontrar el MCD (Máximo común divisor) de dos números.
// Explicacion
/*
|  Q  |  A  |  B  |  R  |
|  2  |  33 |  12 |  9  | Resto de (12 / 33) = 9
|  1  |  12 |  9  |  3  | Resto de (9 / 12 ) = 3
|  3  |  9  |  3  |  0  | Resto de (3 / 9 ) = 0
|  x  |  3  |  0  |  x  | Cuando B = 0 sabemos que el MCD es A
*/

const EuclideanMCD = (a: number, b: number): number => {
  if (b === 0) {
    return a;
  } // validamos si B es igual que 0 y devolvemos A
  return EuclideanMCD(b, a % b); // vamos a usar retornar la misma funcion hasta que se cumpla la valdiacion previa, uso de recursividad
};


// La manera en la que lo hallaremos es con el algoritmo de Euclides y validar su resultado con el 1, si es igual a 1 entonces son 'Co-Primos'
export const CoPrime = (firstNumber: number, secondNumber: number): boolean | TypeError => {
  // Validamos que ambos parametros sean numeros
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    return new TypeError("Argument is not a number.");
  }
  return EuclideanMCD(firstNumber, secondNumber) === 1;
};
