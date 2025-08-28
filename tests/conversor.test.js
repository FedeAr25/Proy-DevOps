const { convertirArsAUsd } = require('../src/conversor');

test('convierte 125000 ARS a USD con tc=1250 => 100', () => {
  expect(convertirArsAUsd(125000, 1250)).toBe(100);
});

test('redondea a 2 decimales', () => {
  expect(convertirArsAUsd(100, 3)).toBe(33.33);
});

test('valida entradas: números y tc>0', () => {
  expect(() => convertirArsAUsd(100, 0)).toThrow(RangeError);
  expect(() => convertirArsAUsd('100', 1250)).toThrow(TypeError);
});
