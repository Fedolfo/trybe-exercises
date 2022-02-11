require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const books = require('./controllers/bookController');
const app = express();

app.use(bodyParser.json());

app.use('/books', books);

app.listen(process.env.PORT, () => {
  console.log('listening', process.env.PORT)
})
