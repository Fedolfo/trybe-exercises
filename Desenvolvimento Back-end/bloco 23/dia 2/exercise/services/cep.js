const dataCep = require('../models/cep');

const CEP_REGEX = /\d{5}-?\d{3}/;

const getAllCep = async () => {
  return await dataCep.getAll();
}

const findByCep = async (cep) => {
  if (!CEP_REGEX.test(cepId)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }

  const cepId = await dataCep.findGetByCep(cep);

  if (!cepId) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }
  return cepId;
}

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const existingCep = await findByCep(cep);

  if (existingCep) return {
    error: { code: "alreadyExists", message: "CEP já existente" }
  }

  const createCep = dataCep.create({ cep, logradouro, bairro, localidade, uf })

  return createCep;
}

module.exports = {
  findByCep,
  getAllCep,
};