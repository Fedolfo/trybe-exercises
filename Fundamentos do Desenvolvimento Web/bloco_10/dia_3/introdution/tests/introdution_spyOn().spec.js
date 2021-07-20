const math = require('../introdution_calculadoraPromise');

// test("#somar", () => {
//   // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
//   const mockSomar = jest.spyOn(math, "somar");

//   mockSomar(1, 2);
//   expect(mockSomar).toHaveBeenCalled();
//   expect(mockSomar).toHaveBeenCalledTimes(1);
//   expect(mockSomar).toHaveBeenCalledWith(1, 2);
//   expect(mockSomar(1, 2)).resolves.toBe(3);
// });

// A única ferramenta que nos permite transitar entre simulação e comportamento original é o jest.spyOn()

test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
});