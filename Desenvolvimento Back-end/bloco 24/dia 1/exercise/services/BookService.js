const { Book } = require('../models')

const findAll = async () => Book.findAll();

module.exports = {
  findAll,
}