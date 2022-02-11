const MoviesService = require('../services/movieService');

const getById = async (req, res) => {
  const { id } = req.params;
  const movieId = await MoviesService.findById(id);

  if (!movieId) return res.status(404).send('Filme não encontrado');

  res.status(200).json(movieId);
}
const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res
      .status(400)
      .send('Dados inválidos');
  }

  res
    .status(201)
    .send('Filme criado com sucesso!');
};


module.exports = {
  create,
  getById,
};