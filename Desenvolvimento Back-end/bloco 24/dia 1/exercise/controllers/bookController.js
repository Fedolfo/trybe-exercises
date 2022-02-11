const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const findAll = await Book.findAll();

    res.status(200).json(findAll);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const bookID = await Book.findByPk(id);

    if (!bookID) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(bookID);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({
      title,
      author,
      pageQuantity
    });

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title,
      author,
      pageQuantity } = req.body;
    const { id } = req.params;

    const [updateBook] = await Book.update(
      {
        title,
        author,
        pageQuantity
      },
      { where: { id } },
    );

    if (!updateBook) return res.status(404).json({ message: 'Book não encontrado' });

    return res.status(200).json({ message: 'Book atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy(
      { where: { id } },
    );

    return res.status(200).json(deleteBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;