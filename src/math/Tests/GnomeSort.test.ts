describe("Probando algoritmo 'Gnome Sort'", () => {
  const testsCases: number[][] = [
    [],
    [2,1],
    [3,2,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [8,5,6,9,7,2,1,1,8,10,6]
  ];
  test.each(testsCases)(
    'Deeberia devolver el valor correcto del caso de prueba: %#',
    (...arr: number[]) => {
    }
  );
});
