const Author = require('../services/Authors');
const Joi = require('joi');

const getAll = async (req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
};

const findById = async (req, res, next) => {
  // Extraímos o id da request
  const { id } = req.params;

  // Pedimos para o service buscar o autor
  const author = await Author.findById(id);

  // Caso o service retorne um erro, interrompemos o processamento
  // e inicializamos o fluxo de erro
  if (author.error) return next(author.error);

  // Caso não haja nenhum erro, retornamos o author encontrado
  return res.status(200).json(author);
};

const createAuthor = async (req, res, next) => {
  const { firstName, middleName, lastName } = req.body;
  // Utilizamos o Joi para descrever o objeto que esperamos
  // receber na requisição. Para isso, chamamos Joi.object()
  // passando um objeto com os campos da requisição e suas descrições
  const { error } = Joi.object({
    // Deve ser uma string (.string()) não vazia (.not().empty()) e é obrigatório (.required())
    firstName: Joi.string().not().empty().required(),
    // Deve ser uma string não vazia e é obrigatório
    lastName: Joi.string().not().empty().required(),
  })
    // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras
    .validate({ firstName, lastName });

  // Caso exista algum problema com a validação, iniciamos o fluxo de erro e interrompemos o middleware.
  if (error) {
    return next(error);
  }

  // Caso não haja erro de validação, prosseguimos com a criação do usuário
  const newAuthor = await Author.createAuthor(firstName, middleName, lastName);

  // Caso haja erro na criação da pessoa autora, iniciamos o fluxo de erro
  if (newAuthor.error) return next(newAuthor.error);

  // Caso esteja tudo certo, retornamos o status 201 Created, junto com as informações
  // da nova pessoa autora
  return res.status(201).json(newAuthor);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};