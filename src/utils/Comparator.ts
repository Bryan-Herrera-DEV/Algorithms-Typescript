/* eslint-disable @typescript-eslint/no-explicit-any */
export default class Comparator {
  compare: (a: any, b: any) => 0 | 1 | -1;
  /**
   * Constructor.
   * @param {function(a: *, b: *)} [compareFunction] - Puede ser función de comparación personalizada que, vamos a
   */
  constructor(compareFunction: (a: any, b: any) => 0 | 1 | -1) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * Función de comparación por defecto. Sólo asume que "a" y "b" son cadenas o números.
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  static defaultCompareFunction(a: number, b: number) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  /**
   * Comprueba si dos variables son iguales.
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  equal(a: any, b: any) {
    return this.compare(a, b) === 0;
  }

  /**
   * Comprueba si la variable "a" es menor que "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThan(a: any, b: any) {
    return this.compare(a, b) < 0;
  }

  /**
   * Comprueba si la variable "a" es mayor que "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThan(a: any, b: any) {
    return this.compare(a, b) > 0;
  }

  /**
   * Comprueba si la variable "a" es menor o igual que "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  lessThanOrEqual(a: any, b: any) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * Comprueba si la variable "a" es mayor o igual que "b".
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  greaterThanOrEqual(a: any, b: any) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  /**
   * Invierte el orden de comparación.
   */
  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a: any, b: any) => compareOriginal(b, a);
  }
}
