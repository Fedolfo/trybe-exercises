// async/await
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

async function main () {
  try {
    const result = await calcularPromise(randomNumbers(), randomNumbers(), randomNumbers())
    console.log('Resultado:', result);
  } catch (err) {
    console.error(err);
  }
}
main();