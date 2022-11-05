# Directrices de contribución
## Antes de contribuir
¡Bienvenido a Algorithms-Typescript Español! Antes de enviar tus `pull requests`, asegúrate de leer todas las directrices. Si tienes alguna duda sobre la guía de contribución, no dudes en exponerla claramente en un issue.

## Contribuyendo
### Colaborador

¡Estamos muy contentos de que consideres implementar algoritmos y estructuras de datos para otros! Este repositorio es referenciado y utilizado por estudiantes de todo el mundo. Siendo uno de nuestros contribuidores, aceptas y confirmas que:
- Has hecho tu trabajo - el plagio no está permitido.
    - Cualquier trabajo plagiado no será fusionado.
    - Si el codigo es tomado de otro repositorio, se debe dar crédito al autor original.
- Su trabajo será distribuido bajo licencia GNU una vez que su `pull request` sea fusionada.
- Su trabajo enviado debe cumplir con nuestros estilos y estándares.

**Las nuevas implementaciones** son bienvenidas. Por ejemplo, nuevas soluciones a un problema, diferentes representaciones de una estructura de datos gráfica o diseños de algoritmos con diferente complejidad.

La mejora de los comentarios y la realización de pruebas adecuadas también son bienvenidas.

### Contribucion
Apreciamos cualquier contribución, desde la corrección de errores gramaticales hasta la implementación de algoritmos complejos. Por favor, lee esta sección si vas a contribuir con tu trabajo.

Si envías un `pull request` que resuelve un problema abierto, por favor ayúdanos a mantener nuestra lista de problemas pequeña añadiendo `fixes: #{$ISSUE_NO}` a tu `commit`. GitHub utilizará esta etiqueta para cerrar automáticamente la incidencia si su PR se fusiona.

#### ¿Qué es un algoritmo?
Un algoritmo es una o más funciones (o clases) que:

- toman una o más entradas.
- realizan algunos cálculos internos o manipulaciones de datos.
- devuelven una o más salidas.
- tienen un mínimo de efectos secundarios.

Los algoritmos deben ser empaquetados de manera que sea fácil para los lectores ponerlos en programas más grandes.

#### Los algoritmos deben:

- tener nombres intuitivos de clases y funciones que dejen claro su propósito a los lectores.
- Utilizar convenciones de nomenclatura de JavaScript/TypeScript y nombres de variables intuitivos para facilitar la comprensión.
- ser flexibles para tomar diferentes valores de entrada.
- lanzar excepciones de JavaScript (RangeError, etc.) en caso de valores de entrada erróneos.

Los algoritmos de este repositorio no deben ser ejemplos de cómo hacer los paquetes de JavaScript existentes. En su lugar, deben realizar cálculos o manipulaciones internas para convertir los valores de entrada en diferentes valores de salida. Estos cálculos o manipulaciones pueden utilizar tipos de datos, clases o funciones de paquetes JavaScript existentes, pero cada algoritmo de este repositorio debe aportar un valor único.

#### Convención de nomenclatura de 

- Los nombres de los archivos deben utilizar el estilo UpperCamelCase (PascalCase).
- No debe haber espacios en los nombres de los archivos.
- **Ejemplo:** `UserProfile.js` está permitido pero `userprofile.js`,`Userprofile.js`,`user-Profile.js`,`userProfile.js` no lo están.

#### Sistema de módulos
Utilizamos el sistema ES Module, que aporta un sistema de módulos oficial y estandarizado a JavaScript.

A grandes rasgos, significa que tendrás que utilizar declaraciones `export` e `import` en lugar de `module.exports` y `require()`.

#### Probando
Asegúrese de que su código funciona. ¿Cuándo fue la última vez que hiciste un cambio en el código, tu construcción falló y la mitad de tu aplicación dejó de funcionar? La mía fue la semana pasada. Escribir pruebas para nuestros algoritmos nos ayudará a asegurar que las implementaciones son herméticas incluso después de múltiples correcciones y cambios de código.

Utilizamos Jest para ejecutar pruebas unitarias en nuestros algoritmos. Proporciona una manera muy legible y expresiva para estructurar su código de prueba.

Se aconseja que el archivo del algoritmo (módulo) no contenga ningún código "vivo", sino que sólo exporte la(s) función(es) necesaria(s) para ejecutar el algoritmo. Su código de prueba puede importar esas funciones, llamarlas con los parámetros adecuados e inspeccionar el resultado. Ejemplo: [RatInAMaze.test.js](https://github.com/TheAlgorithms/JavaScript/blob/master/Backtracking/tests/RatInAMaze.test.js).

Por favor, absténgase de utilizar la consola en su implementación Y código de prueba.

Primero debes instalar todas las dependencias usando

```bash
npm install
```
Puedes (¡y deberías!) ejecutar todas las pruebas localmente antes de confirmar los cambios:
```bash
npm test
```
Si quieres ahorrar algo de tiempo y sólo ejecutar una prueba específica:
```bash
# Esto ejecutará cualquier archivo de prueba cuyo nombre contenga "koch" (no es necesario especificar la ruta de la carpeta)
npm test -- koch
```
También puedes iniciar Jest en modo "watch":
```bash
npm test -- --watchAll
```
También hemos preparado un script de ayuda que ejecuta las pruebas sólo para los archivos modificados:
```bash
npm run test-changed
```
Esto ejecutará todas las pruebas y vigilará los archivos fuente y de prueba en busca de cambios. Cuando se realice un cambio, las pruebas se ejecutarán de nuevo.

#### Estilo de codificación
Para maximizar la legibilidad y la corrección de nuestro código, requerimos que los nuevos envíos sigan el estilo estándar de JavaScript/Typescript.

Antes de enviar el código, ejecute:
```bash
npm run style
```
para aplicar el estilo de codificación (en los casos en que pueda hacerse automáticamente). Si se muestra un error, por favor, averigüe qué es lo que está mal, arréglelo y ejecute standard de nuevo.

Algunas (pero no todas) de las cosas a tener en cuenta:

- Utilice camelCase con el carácter inicial en minúscula para los nombres de los identificadores (variables y funciones).
- Los nombres comienzan con una letra.
- Siga la indentación del código: Utilice siempre 2 espacios para la sangría de los bloques de código.
- Asegurese de que su código no contenga espacios en blanco innecesarios.
- No olvide que toda declaración debe terminar con un punto y coma.
- Siempre use los types de TypeScript para las variables y funciones. No utilice `any` o `unknow` a menos que sea absolutamente necesario.
```typescript
function sumOfArray(arrayOfNumbers: number[]): number {
  let suma: number = 0

  for (let i: numver = 0; i < arrayOfNumbers.length; i++) {
    suma += arrayOfNumbers[i]
  }
  return suma
```
- Evite el uso de variables globales y evite `==`.
- Utiliza `let` en lugar de `var`.
- Por favor, absténgase de utilizar `console.log` o cualquier otro método de consola.
- No utilices en absoluto `alert`.
- Recomendamos encarecidamente el uso de ECMAScript 6.
- Evite importar bibliotecas externas para algoritmos básicos. Sólo utilice esas bibliotecas para los algoritmos complicados.
- Y lo más importante:
    - Sé coherente en el uso de estas directrices cuando envíes tu proyecto.
    - ¡Feliz coding!

Esta guía está basada en [Javascript Contributing](https://github.com/TheAlgorithms/JavaScript/blob/master/CONTRIBUTING.md) y fue traducida por [Bryan Herrera](https://github.com/Bryan-Herrera-DEV)