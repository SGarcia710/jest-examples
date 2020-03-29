import { numbers } from '../numbers';

describe('Comparaciones númericas', () => {
  test('Mayor que', () => {
    expect(numbers(2, 2)).toBeGreaterThan(3);
  });
  test('Mayor que o igual', () => {
    expect(numbers(5, 2)).toBeGreaterThanOrEqual(7);
  });
  test('Menor que', () => {
    expect(numbers(2, 2)).toBeLessThan(10);
  });
  test('Menor que', () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(4);
  });
  test('Numeros flotanes', () => {
    expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
  });
});
