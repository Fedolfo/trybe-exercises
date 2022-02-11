// Crie uma função que recebe três parâmetros retorna uma Promise .
const { randomNumbers } = require('./exercise2');

function calcularPromise (a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(a, b, c)) reject(new Error('Informe apenas números'));
    const result = (a + b) * c;
    if (result < 50) reject(new Error('Valor muito baixo!'));
    if((result) >= 50) resolve(result);
  })
  return promise;
}

// calcularPromise(randomNumbers().toString()) -- fiz um array de 3 numeros é transformei em numeros inteiros, mas sem sucesso..
//   .then(result => console.log(`sucesso: ${result}`));

  calcularPromise(randomNumbers(), randomNumbers(), randomNumbers())
  .then(result => console.log(`resultado: ${result}`));