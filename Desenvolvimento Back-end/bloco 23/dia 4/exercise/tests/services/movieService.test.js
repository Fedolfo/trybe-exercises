const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Busca um filme no db pelo "id" passado', () => {
  describe('quando não existe o "id" do filme', async () => {
    before(async () => {
      const execute = [[]];
      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna nulo', async () => {
      const result = await MoviesService.findById();
      expect(result).to.be.equal(null);
    });

    describe('quando existe o "id" do filme', async () => {
      before(() => {
        const payloadMovie = {
          id: 1,
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        }
        sinon.stub(MoviesModel, 'getId').resolves(payloadMovie);
      })

      after(() => {
        MoviesModel.getId.restore();
      })

      it('retorna um object', async () => {
        const result = await MoviesService.findById(1);
        expect(result).to.be.an('object');
      })

      it('o objeto não está vazio', async () => {
        const response = await MoviesService.findById(1);

        expect(response).to.be.not.empty;
      });

      it('tal objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
        const values = await MoviesService.findById(1);

        expect(values).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
      });
    })
  })
})