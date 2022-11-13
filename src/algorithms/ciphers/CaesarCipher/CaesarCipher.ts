/**
 * @function caesarsCipher
 * @description - En criptografía, el cifrado César, también conocido como cifrado del César, cifrado por desplazamiento. Es un tipo de cifrado por sustitución en el que cada letra del texto plano se sustituye por una letra en un número fijo de posiciones hacia abajo del alfabeto. Por ejemplo, con un desplazamiento a la izquierda de 3, la D sería sustituida por la A, la E se convertiría en la B, y así sucesivamente.
 * @param  {string} str - cadena a encriptar
 * @param {number} rotation - el número de rotación, se espera que sea un número real ( > 0)
 * @param {boolean} encrypt - si es true, encripta, si es false, desencripta
 * @return {string} - cadena descifrada
 */

 const caesarCipher = ( str: string, rotation: number, encrypt: boolean = true): string => {
   if (typeof str !== "string" || !Number.isInteger(rotation) || rotation < 0) {
     throw new TypeError("Argumentos inválidos");
    }

  rotation = encrypt ? rotation : -(rotation);
  const alphabets = new Array(26)
    .fill(0) // Genera un array con los caracteres del alfabeto, empiezan en el caracter 97 que es la letra a
    .map((_, index) => String.fromCharCode(97 + index));
    // map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

  const cipherMap = alphabets.reduce( // aplica una función a cada elemento de izquierda a derecha para crear el diccionario cifrado
      (map, char, index) => {
        if (((rotation + index) % 26) < 0) {
          return map.set(char, alphabets[26 + ((rotation + index) % 26)]);
        }

        return map.set(char, // aqui lo seteo con la letra correspondiente
          alphabets[(rotation + index) % 26] // hace que una vez llego a 26 se reinicie el ciclo en 0 para extraerlo del array
        );
      },
      new Map()
    );

  return str.replace(/[a-z]/gi, (char: string) => {
    if (/[A-Z]/.test(char)) {
      return cipherMap.get(char.toLowerCase()).toUpperCase();
    }

    return cipherMap.get(char);
  });
};



export default caesarCipher;
