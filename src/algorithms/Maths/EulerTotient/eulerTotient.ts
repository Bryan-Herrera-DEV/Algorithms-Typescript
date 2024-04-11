/**
 * @function EulerTotient
 * @description es una función que cuenta la cantidad de números hasta n que son coprimos con n
 * @param: {number} n - Numero primo
 * @return: {number} - Devuelve cuantos numeros menores o iguales a n son coprimos de n
 */

const primeFactors = (n: number): number[] => {
  const factors: Set<number> = new Set(); // set para almacenar los factores unicos
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      factors.add(i);
      n /= i;
    }
  }
  if (n > 1) {
    factors.add(n);
  }
  return Array.from(factors);
};

const product = (numbers: number[]) => numbers.reduce((acc, val) => acc * val, 1);

export const eulerTotient = (n: number): number => {
  const factors = primeFactors(n);
  const factorsAdjustment = factors.map(factor => (1 - 1 / factor));
  return Math.floor(n * product(factorsAdjustment));
};
