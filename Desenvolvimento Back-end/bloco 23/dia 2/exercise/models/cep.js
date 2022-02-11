const connection = require('./connection');

const getAll = async () => {
  const query =
    'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps';
  const [cepData] = await connection.execute(query);
  return (cepData);
}

const CEP_REGEX = /\d{5}-\d{3}/;

// Função que formata um CEP
const formatCep = (cep) => {
  // Caso o CEP já esteja formatado, retorna o próprio CEP
  if (CEP_REGEX.test(cep)) return cep;

  // Caso não esteja formatado, utiliza regex para adicionar a formatação
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf
});

const findGetByCep = async (cep) => {
  const treatedCep = cep.replace('-', '');
  const query =
    'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?';
  const [cepData] = await connection.execute(query, [treatedCep])[0];

  if (!cepData) return null;

  return getNewCep(cepData);
}

const create = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  const cep = rawCep.replace(/-/ig, '');
  const query = 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)'
  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  return { cep, logradouro, bairro, localidade, uf }
}

module.exports = {
  findGetByCep,
  getAll,
  create,
};