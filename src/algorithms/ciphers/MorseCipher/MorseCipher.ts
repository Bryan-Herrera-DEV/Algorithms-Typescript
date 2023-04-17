/**
 * @function MorseCipher
 * @description Es un algoritmo de cifrado que usa una serie de puntos y rayas para representar cada letra del alfabeto.
 * @param: {string} text - Texto a cifrar.
 * @param: {string} action - Accion a realizar, cifrar o descifrar.
 * @return: {string} - Devuelve el texto cifrado o descifrado.
 */

export const morseCipher = (
  str: string,
  action: "cipher" | "des-cipher"
): string => {
  const toMorse: {
    [key: string]: string;
  } = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
  };

  const toText: {
    [key: string]: string;
  } = {};

  Object.keys(toMorse).forEach((key: string) => {
    toText[toMorse[key]] = key;
  });

  if (action === "cipher") {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      const letter = str[i].toLocaleLowerCase();

      if (toMorse[letter]) {
        result += toMorse[letter] + " ";
      } else {
        result += " ";
      }
    }
    return result.trim();
  }

  return toMorse.saludo;
};
