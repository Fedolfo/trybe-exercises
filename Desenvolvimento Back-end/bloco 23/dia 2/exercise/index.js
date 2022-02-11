const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi');
const serviceCep = require('./services/cep');
const controllerCep = require('./controllers/cep');
const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'ping' });
});

// app.get('/cep/:cep', (req, res, next) => {
//   const { cep } = req.params;
//   const { error } = Joi.object({
//     // Deve ser um numero (.string()) não vazia (.not().empty()) deve ter o minimo de caracteres numerais (.min()) e máximo de caracteres (.max()) e formatado em cep ((.pattern(regex)) e é obrigatório (.required())
//     cep: Joi.number().not().empty().min(8)
//       .max(8).pattern(new RegExp('\d{5}-?\d{3}')).required(),
//     // Deve ser uma string não vazia e é obrigatório
//   })
//     // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras
//     .validate({ cep });
//   if (error) {
//     return next(error);
//   }
//   res.status(200).json(serviceCep.findByCep(cep));
// });

app.get('/cep', controllerCep.getAll);

app.get('/cep/:cep', controllerCep.searchCep);

app.post('/cep', controllerCep.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});