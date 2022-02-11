const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../index');
const { User } = require('../../../models');

describe('Busca todos os usuários', () => {
  describe('quando não existe nenhum usuário cadastrado', () => {
    const findAllStub = stub(User, 'findAll'); // simula a função tirado da lib sequelize, que pega todos os usarios cadastrados

    before(() => {
      findAllStub.resolves([]); // antes de tudo, resolver se existe usuario cadastrado
    });

    after(() => {
      findAllStub.restore(); // restaura
    });

    it('called User.findAll', async () => {
      await chai.request(app)
        .get('/user');

      expect(User.findAll.calledOnce).to.be.equals(true);
    });

    it('o status é 200', async () => { // caso a função retornar uma resposta, retorna status OK
      const result = await chai.request(app)
        .get('/user');

      expect(result.status).to.be.equals(200);
    });

    it('a resposta é um array', async () => {
      const result = await chai.request(app)
        .get('/user');

      expect(result.body).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const result = await chai.request(app)
        .get('/user');

      expect(result.body).to.be.empty;
    });
  });
});