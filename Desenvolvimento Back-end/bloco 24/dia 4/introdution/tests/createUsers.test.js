const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../api/app');
const { User } = require('../models');
const { User: userMock } = require('./mock/models')
chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /api/users', () => {
  before(() => {
    sinon.stub(User, 'create')
      .callsFake(userMock.create);
    sinon.stub(User, 'findAll')
      .callsFake(userMock.findAll);
  });

  after(() => {
    User.create.restore();
    User.findAll.restore();
  });

  describe('Consulta a lista de pessoas usuárias', () => {
    let response;

    before(async () => {
      response = await chai
        .request(server)
        .get('/api/users');
    });
    it(
      'A requisição GET para a rota traz uma lista inicial ' +
      'contendo dois registros de pessoas usuárias',
      () => {
        expect(response.body).to.have.length(2);
      }
    );

    it('Essa requisição deve retornar código de status 200', () => {
      expect(response).to.have.status(200);
    });
  });

  describe('Insere um novo registro', () => {
    let createRequest = {};
    let firstUserList = [];
    let secondUserList = [];
    const newUser = {
      username: 'jane',
      password: 'senha123',
    };

    before(async () => {
      firstUserList = await chai
        .request(server)
        .get('/api/users')
        .then(({ body }) => body);
      createRequest = await chai
        .request(server)
        .post('/api/users')
        .send(newUser);
      secondUserList = await chai
        .request(server)
        .get('/api/users')
        .then(({ body }) => body);
    });

    it('firstUserList: A primeira requisição GET para a rota deve retornar 2 registros', () => {
      expect(firstUserList).to.have.length(2);
    });

    it('createRequest: A requisição POST para a rota retorna o código de status 201', () => {
      expect(createRequest).to.have.status(201);
    });

    it('createRequest: A requisição deve retornar um objeto no corpo da resposta', () => {
      expect(createRequest.body).to.be.a('object');
    });

    it('createRequest: O objeto possui a propriedade "message"', () => {
      expect(createRequest.body)
        .to.have.property('message');
    });

    it('createRequest: A propriedade "message" possui o texto "Novo usuário criado com sucesso"',
      () => {
        expect(createRequest.body.message)
          .to.be.equal('Novo usuário criado com sucesso');
      }
    );

    it('secondUserList: A segunda requisição GET para rota deve retornar, por tanto, 3 registros', () => {
      expect(secondUserList).to.have.length(3);
    });

    it('secondUserList: O registro criado deve corresponder ao enviado na requisição POST', () => {
      expect(secondUserList[2]).to.contain(newUser);
    })
  });

});