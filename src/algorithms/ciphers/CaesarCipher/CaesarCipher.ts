/**
 * @function CaesarCipher
 * @description: En criptografía, el cifrado César, también conocido como cifrado del César, cifrado por desplazamiento. Es un tipo de cifrado por sustitución en el que cada letra del texto plano se sustituye por una letra en un número fijo de posiciones hacia abajo del alfabeto. Por ejemplo, con un desplazamiento a la izquierda de 3, la D sería sustituida por la A, la E se convertiría en la B, y así sucesivamente.
 * @param: str {string} - Cadena a encriptar o a desencriptar
 * @param: rotation {number} - Numero que va a definir el desplazamiento del texto
 * @param: encrypt {boolean} - Si es true, encriptamos, si es false, desencriptamos
 * @return: {string} - cadena desencriptada i encriptada dependiendo el caso
 */


export const CaesarCipher = (str: string, rotation: number, encrypt: boolean = true): string => {
  if (typeof str !== "string" || !Number.isInteger(rotation) || rotation <= 0 || typeof encrypt !== "boolean") {
    throw new TypeError("Argumentos invalidos");
  }

  rotation = encrypt ? rotation : -(rotation);

  const alphabets = new Array(26)
    .fill(0)
    .map((_ :string, index: number) => String.fromCharCode(97 + index));

  const cipherMap = alphabets.reduce(
    (map, char, index) => {
      if (((rotation + index) % 26) < 0) {
        return map.set(char, alphabets[26 + ((rotation + index) % 26)]);
      }
      return map.set(char, alphabets[(rotation + index) % 26]);
    },
    new Map()
  );

  return str.replace(/[a-z]/gi, (char: string): string => {
      if (/[A-Z]/.test(char)) {
        return cipherMap.get(char.toLocaleLowerCase()).toUpperCase();
      }
      return cipherMap.get(char);
  });
};
