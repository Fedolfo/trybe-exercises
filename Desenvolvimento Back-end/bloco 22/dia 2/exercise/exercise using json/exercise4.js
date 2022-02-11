const fs = require('fs');
// 4.1
const converterParaString =  (arquivo) => {
  const jsonConvertido = arquivo;
  const formated = jsonConvertido.map((texto) => {
    const { id, name } = texto;
    const stringInList = `${id} - ${name}`;
    return (stringInList);
  });
  return formated;
}

function recoverJsonSimpson() {
  fs.readFile('simpson.json', (err, data) => {
    if (err) throw err;
    const simpson = JSON.parse(data);
    console.log(converterParaString(simpson));
  });
}
recoverJsonSimpson();

//4.2
function recoverIdJsonSimpson(id) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile('simpson.json', (err, data) => {
      if (err) throw err;
      const simpson = JSON.parse(data);
      if (simpson.id !== id) new Error(reject('id não encontrado'));
      if (simpson.id === id) resolve('id encontrado'); // bug não entra informação!
    });
  })
  return promise;
}

async function main () {
  try {
    const result = await recoverIdJsonSimpson('1');
    console.log('Resultado:', result);
  } catch (err) {
    console.error(err);
  }
}

main();