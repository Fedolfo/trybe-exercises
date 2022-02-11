// index.js
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const authors = require("./models/Authors");

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const listAuthors = await authors.getAll();

  res.status(200).json(listAuthors);
});

app.get('/books', async (_req, res) => {
  const listBooks = await authors.getAllBooks();

  res.status(200).json(listBooks);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const AuthorID = await authors.getByAuthorId(id);

  if (!AuthorID) res.status(404).json({ message: "Author not found" });

  res.status(200).json(AuthorID);
})

app.post('/authors/', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!authors.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: "invalid credentials" });

  await authors.create(first_name, middle_name, last_name);

  res.status(201).json({ message: "Author created" });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
