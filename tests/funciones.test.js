const { sumar } = require('../src/funciones');

test('suma dos números correctamente', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('lanza error si algún argumento no es número', () => {
  expect(() => sumar('2', 3)).toThrow(TypeError);
});
