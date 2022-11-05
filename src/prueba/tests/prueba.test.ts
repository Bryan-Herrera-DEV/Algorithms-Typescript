import { sumaPrueba } from '../prueba'

describe('Suma valida', () => {
  it('Suma 1 + 2 = 3', () => {
    expect(sumaPrueba(1, 2)).toBe(3)
  });
  it('Suma 8 + 2 = 3', () => {
    expect(sumaPrueba(8, 2)).toBe(10)
  });
})
