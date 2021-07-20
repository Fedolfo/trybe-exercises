/* eslint-disable max-len */
const average = require('../average')
/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('1 - Implemente a função `average`', () => {
  it('Verifica se o comportamento da função "average" está correto', () => {
    // assert.strictEqual(average([3, 4, 5]), 4);
    expect(average([3, 4, 5])).toBe(4);
  });
    // assert.strictEqual(average([1, 2, 3, '4', 5]), undefined);
    it('verifica se passar uma string retorna undefined',() => {
      expect(average([1, 2, 3, '4', 5])).toBe(undefined);
    });
//     assert.strictEqual(average([0, 0, 0, 0, 0, 0, 0]), 0);
    it('verifica se ao passar um array de valor 0, retorna 0', () => {
      expect(average([0, 0, 0, 0, 0, 0, 0])).toBe(0);
    });
//     assert.strictEqual(average([1, 2, '3']), undefined);
    it('verifica se passar uma string retorna undefined', () => {
      expect(average([1, 2, '3'])).toBe(undefined);
    });
//     assert.strictEqual(average([1, 2, 3]), 2);
    it('verifica se ao somar o array, e dividir pelo indice do array se retorna 2', () => {
      expect(average([1, 2, 3])).toBe(2);
    });
//     assert.strictEqual(average([0, 0, 0, 0, 0, 0, 1]), 0);
    it('verifica se ao somar com apenas um valor número 1, e dividir pelo índice dele mesmo, retorna 0', () => {
      expect(average([0, 0, 0, 0, 0, 0, 1])).toBe(0);
    });
//     assert.strictEqual(average([]), undefined);
    it('verifica se for somado um array vázio retorna undefined', () => {
      expect(average([])).toBe(undefined);
    });
//     assert.strictEqual(average([' ']), undefined);
    it('verifica se for somado um array com apenas uma string retornando true, retornara undefined', () => {
      expect(average([' '])).toBe(undefined);
    });
//     assert.strictEqual(average(['um', 'dois', 'tres']), undefined);
    it('verifica se for somado strings, retornara undefined', () => {
      expect(average(['um', 'dois', 'tres'])).toBe(undefined);
    });
//     assert.strictEqual(average([47, 63, 122]), 77);
    it('verifica se for somado um array de valores altos retorna de acordo como a função foi construida', () => {
      expect(average([47, 63, 122])).toBe(77);
    });
//     assert.strictEqual(average([-11, 2, 5]), -1);
    it('verifica se for somado array com numeros negativos retornara de acordo como a função foi construida', () => {
      expect(average([-11, 2, 5])).toBe(-1);
    });

//     assert.strictEqual(average([-11, -5, 2]), -5);
    it('verifica se for somado array com numeros negativos retornara de acordo como a função foi construida', () => {
      expect(average([-11, -5, 2])).toBe(-5);
    });
});
