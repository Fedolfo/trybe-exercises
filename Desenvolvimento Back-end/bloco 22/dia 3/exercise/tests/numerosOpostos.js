const { expect } = require('chai');
const { numerosOpostos } = require('../numerosOpostos');
describe('Chamando a função numerosOpostos', () => {
  describe('onde recebe como parâmetro um numero mas', () => {
    it('retorna uma string', () => {
      const result = numerosOpostos(1)
      expect(result).to.be.a('string');
    });
  });
});

describe('Testando funcionalidades da função numerosOpostos', () => {
  it('testa caso a função for maior que zero irá retornar a string "positivo"', () => {
    const result = numerosOpostos(1);
    expect(result).to.deep.equal('positivo');
  });
  it('testa caso a função for igual a zero irá retornar a string "neutro"', () => {
    const result = numerosOpostos(0);
    expect(result).to.deep.equal('neutro');
  });
  it('testa caso a função for menor que zero irá retornar a string "negativo"', () => {
    const result = numerosOpostos(-1);
    expect(result).to.deep.equal('negativo');
  });
});

describe('Em caso de erro da função numerosOpostos', () => {
  it('não é valido string como parâmetro', () => {
    const result = numerosOpostos('1');
    expect(result).to.be.equals('Apenas números');
  });
});
