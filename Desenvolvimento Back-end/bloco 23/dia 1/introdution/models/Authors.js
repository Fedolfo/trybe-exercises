// models/Author.js

const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {

  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.map(serialize).map(getNewAuthor);
};

const getAllBooks = async () => {
  const [books] = await connection.execute(
    `SELECT * FROM model_example.books;`,
  );
  return books;
}

const getByAuthorId = async (id) => {
  const [authorsData] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?;', [id]
  );
  if (authorsData.length === 0) return null;

  const { firstName, middleName, lastName } = authorsData.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  })
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);

module.exports = {
  getAll,
  getAllBooks,
  getByAuthorId,
  isValid,
  create,
};
