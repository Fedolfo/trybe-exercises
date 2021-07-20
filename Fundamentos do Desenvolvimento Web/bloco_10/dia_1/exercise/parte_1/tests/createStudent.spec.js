/* eslint-disable max-len */
const createStudent = require('../createStudent');

/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome, retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('5 - Implemente a função `createStudent`', () => {
  const estudante = createStudent('Leandrão, o Lobo Solitário');
  const goodPerson = 'Eita pessoa boa!';
  it('Verifica se a função `createStudent` retorna o objeto esperado', () => {
   expect(typeof estudante).toBe('object');
  });
  it('verifica se o tipo estudante recebido pelo feedback e uma função', () => {
    expect(typeof estudante.feedback).toBe('function');
  });
  // assert.strictEqual(estudante.name, 'Leandrão, o Lobo Solitário');
  it('verifica se o estudante.name retorna o valor', () => {
    expect(estudante.name).toBe('Leandrão, o Lobo Solitário');
  });
    // assert.strictEqual(estudante.feedback(), goodPerson);
  it('verifica se o estudante.feedback() retorna o valor goodPerson', () => {
    expect(estudante.feedback()).toBe(goodPerson);
  });
});
describe('5.1 - Implemente a função `createStudent`', () => {
  const estudante2 = createStudent('Nobre');
  const goodPerson = 'Eita pessoa boa!';
    // assert.strictEqual(typeof estudante2, 'object');
  it('verifica o tipo do estudante se retorna um objeto', () => {
    expect(typeof estudante2).toBe('object');
  });
    // assert.strictEqual(typeof estudante2.feedback, 'function');
  it('verifica se o tipo estudante2.feedback retorna uma função', () => {
    expect(typeof estudante2.feedback).toBe('function');
    });
    // assert.strictEqual(estudante2.name, 'Nobre');
  it('verifica se ao pegar o valor estudante2.name retorna "Nobre"', () => {
    expect(estudante2.name).toBe('Nobre');
  });
    // assert.strictEqual(estudante2.feedback(), goodPerson);
  it('verifica se ao pegar o valor estudante2.feedback(), retorna o valor de goodPerson', () => {
    expect(estudante2.feedback()).toBe(goodPerson);
  });
});

describe('5.2 - Implemente a função `createStudent`', () => {
  const estudante3 = createStudent('Inácio');
  const goodPerson = 'Eita pessoa boa!';
    // assert.strictEqual(typeof estudante3, 'object');
  it('verifica o tipo do estudante se retorna um objeto', () => {
    expect(typeof estudante3).toBe('object');
  });
    // assert.strictEqual(typeof estudante3.feedback, 'function');
  it('verifica se o tipo estudante3.feedback retorna uma função', () => {
    expect(typeof estudante3.feedback).toBe('function');
    });
    // assert.strictEqual(estudante3.name, 'Inácio');
  it('verifica se ao pegar o valor estudante3.name retorna "Inácio"', () => {
    expect(estudante3.name).toBe('Inácio');
  });
    // assert.strictEqual(estudante3.feedback(), goodPerson);
  it('verifica se ao pegar o valor estudante2.feedback(), retorna o valor de goodPerson', () => {
    expect(estudante3.feedback()).toBe(goodPerson);
  });
});
