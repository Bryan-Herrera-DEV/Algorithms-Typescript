import { CaesarCipher } from "../CaesarCipher";

describe("Probando el algoritmo de Crifrado 'Caeser Cipher'", () => {
  it("1. Probando casos de error controlados", () => {
    expect(() => CaesarCipher(false as unknown as string, 2)).toThrow(); // .toThrow espera errores controlados de tipo 'throw new Error'
    expect(() => CaesarCipher(0 as unknown as string, "error" as unknown as number)).toThrow(); // .toThrow espera errores controlados de tipo 'throw new Error'
  });

  it("2. Probando casos de encriptado", () => {
    expect(CaesarCipher("abcd", 1)).toBe("bcde");
    expect(CaesarCipher("ABC", 2)).toBe("CDE");
  });

  it("3. Probando casos de des-encriptado", () => {
    expect(CaesarCipher("bcde", 1, false)).toBe("abcd");
    expect(CaesarCipher("CDE", 2, false)).toBe("ABC");
    expect(CaesarCipher("ab", 2, false)).toBe("yz");
  });
});
