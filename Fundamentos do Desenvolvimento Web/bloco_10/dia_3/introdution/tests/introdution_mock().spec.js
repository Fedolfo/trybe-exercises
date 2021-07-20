const math = require('../introdution_calculadoraPromise');
jest.mock("../introdution_calculadoraPromise");

it("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  // É o que o método mockImplementation(func) faz. Ele aceita uma função que deve ser usada como implementação.
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  // utilizamos também o método toHaveBeenCalledWith(...args) , que valida quais parâmetros foram passados para a função.
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});
// 1 Faça o mock da funcão subtrair e teste sua chamada.
it('#subtrair,', () => {
  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair(5, 3);

  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair(5, 3)).toBe(2);
});

// 2 Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
it('#multiplicar,', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);
  // math.multiplicar.mockImplementation((a, b) => a * b);
  math.multiplicar(5, 2);

  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
  expect(math.multiplicar(5, 2)).toBe(10);
});

// 3 Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
it('#somar,', async () => {
  const mockSomar = jest.spyOn(math, "somar");
  mockSomar.mockResolvedValue(5);

  mockSomar(2, 3);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(2, 3);
  await expect(mockSomar(2, 3)).resolves.toBe(5);
});

// 4 Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

it('#dividir,', () => {
  const mockDividir = jest.spyOn(math, "dividir");
  mockDividir.mockReturnValue(15);
  mockDividir.mockReturnValueOnce(2);
  mockDividir.mockReturnValueOnce(5);

  expect(mockDividir(4, 2)).toBe(2);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(1);
  expect(mockDividir).toHaveBeenCalledWith(4, 2);

  expect(mockDividir(10, 2)).toBe(5);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(2);
  expect(mockDividir).toHaveBeenCalledWith(10, 2);

  expect(mockDividir(30, 2)).toBe(15);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(3);
  expect(mockDividir).toHaveBeenCalledWith(30, 2);
});

// 5 Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.

it('#subtrair1.1,', () => {
  const mockSubtrair = jest.spyOn(math, "subtrair");
  mockSubtrair.mockImplementation((a, b) => a * b);
  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair(10, 2)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);

  mockSubtrair.mockRestore();
  mockSubtrair.mockReturnValue(8);

  expect(mockSubtrair(10, 2)).toBe(8);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
});

// Assim como o mockReturnValueOnce , podemos também implementar uma funcionalidade para apenas uma chamada com mockImplementationOnce .