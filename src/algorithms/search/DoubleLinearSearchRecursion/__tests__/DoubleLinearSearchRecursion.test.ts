import { DoubleLinearSearchRecursion } from "../DoubleLinearSearchRecursion";

describe("Probando algoritmo 'Duble Linear Search With Recursion'", () => {
  const testArray: number[] = [1, 2, 3, 4];

  it("Tiene que estar definido", () => {
    expect(DoubleLinearSearchRecursion(testArray, 2)).toBeDefined();
  });
  it("Tiene que devolver un numero", () => {
    expect(typeof DoubleLinearSearchRecursion(testArray, 2)).toBe("number");
  });
  it("Tiene que devolver -1 si el target no se encuentra en el array", () => {
    expect(DoubleLinearSearchRecursion(testArray, 5)).toBe(-1);
  });
  it("Tiene que devolver -1 si no hay elementos en el array", () => {
    expect(DoubleLinearSearchRecursion([], 5)).toBe(-1);
  });
  it("Tiene que devolver el índice del target si se encuentra en el array", () => {
    expect(DoubleLinearSearchRecursion(testArray, 2)).toBe(1);
  });
  it("Tiene que devolver un índice correcto de destino cuando el array contiene valores duplicados", () => {
    expect(DoubleLinearSearchRecursion([1, 2, 2, 3, 3, 3, 4], 2)).toBe(1);
  });
  it("Tiene que devolver el primer índice cuando el objetivo es el primer elemento del array", () => {
    expect(DoubleLinearSearchRecursion(testArray, 1)).toBe(0);
  });
  it("Tiene que devolver el último índice cuando el objetivo es el último elemento del array", () => {
    expect(DoubleLinearSearchRecursion(testArray, 4)).toBe(3);
  });
});
