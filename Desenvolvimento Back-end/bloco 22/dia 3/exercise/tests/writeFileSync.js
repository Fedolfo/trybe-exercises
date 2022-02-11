const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const writeFileSync = require('../writeFileSync');

describe('Executa a função writeFileSync', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = writeFileSync('arquivo.txt', 'sou o cara!');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = writeFileSync('arquivo.txt', 'sou o cara!');

      expect(resposta).to.be.equals('ok');
    });
  });
});