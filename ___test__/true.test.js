import { isTrue, isFalse, isUndefined, isNull } from '../true';

describe('Probar resultados nulos', () => {
  test('null', () => {
    expect(isNull()).toBeNull();
  });
});

describe('Probar resultados verdaderos', () => {
  test('true', () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe('Probar resultados falsos', () => {
  test('false', () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe('Probar resultados indefinidos', () => {
  test('undefined ', () => {
    expect(isUndefined()).toBeUndefined();
  });
});

describe('Probar resultados no verdaderps', () => {
  test('No es verdadero', () => {
    expect(isFalse()).not.toBeTruthy();
  });
});
