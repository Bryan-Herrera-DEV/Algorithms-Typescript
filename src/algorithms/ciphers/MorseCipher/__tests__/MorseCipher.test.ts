import { morseCipher } from "../MorseCipher";

describe("Probando el Cifrador: Morse Cipher", () => {
  it("Tiene que devolver un texto Encriptado/Cifrado", () => {
    expect(morseCipher("hello world", "cipher")).toBe(
      ".... . .-.. .-.. ---  .-- --- .-. .-.. -.."
    );
  });
});
