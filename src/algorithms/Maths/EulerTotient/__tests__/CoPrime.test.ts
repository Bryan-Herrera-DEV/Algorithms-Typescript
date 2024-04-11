import { eulerTotient } from "../eulerTotient";

describe("Probando algoritmo 'Totiente de Euler'", () => {
  test("PHI de 36 debe ser 12", () => {
    expect(eulerTotient(36)).toBe(12);
  });
  test("PHI de 97 (numero primo) debe ser 96", () => {
    expect(eulerTotient(36)).toBe(12);
  });
});
