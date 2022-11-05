import { sumaPrueba } from "../prueba";

describe("Suma valida", () => {
  it("Suma 1 + 2 = 3", () => {
    expect(sumaPrueba(1, 2)).toBe(3);
  });
})

// este caso debe fallar
describe("Suma invalida", () => {
  it("Suma 1 + 2 = 4", () => {
    expect(sumaPrueba(1, 2)).toBe(4);
  });
})
