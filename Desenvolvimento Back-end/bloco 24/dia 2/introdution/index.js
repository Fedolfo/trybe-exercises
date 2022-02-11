// index.js
require('dotenv').config();
const express = require('express');
// const { Address, Employee } = require('./models');

const app = express();

// app.get('/employees', async (_req, res) => {
//   try {
//     const employees = await Employee.findAll({
//       include: { model: Address, as: 'addresses' },
//     });

//     return res.status(200).json(employees);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   };
// });

// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     // const employee = await Employee.findOne({
//     //   where: { id },
//     //   include: [{ model: Address, as: 'addresses' }], // pega todas as informações de um id
//     // });
//     const employee = await Employee.findOne({ where: { id } });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

//     if (req.query.includeAddresses === 'true') {
//       // http://localhost:3000/employees/1?includeAddresses=true ao retirar o (? = req.query)
//       // se incluir o valor do endereço na query retorna o employer e o endereço

//       const addresses = await Address.findAll({ where: { employeeId: id } });
//       return res.status(200).json({ employee, addresses });
//     }
//     // se não o valor retornado vira false assim não passa no if.
//     // com isso o valor que retorna e apenas o employeer
//     /*
//             {
//             "id": 1,
//             "firstName": "Marcos",
//             "lastName": "Zuck",
//             "age": 49
//             }
//     */
//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

const { Book, User } = require('./models');

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;