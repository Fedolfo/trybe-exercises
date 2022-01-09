const readline = require('readline-sync');

function velocidade(distancia, tempo) {
  const velocidadeMedia = (distancia, tempo) => distancia / tempo;
  const distanciaPercorrida = readline.questionInt('Qual foi a distancia percorrida?\n ');
  const tempoGastado = readline.questionInt('Qual foi o tempo gastado?\n ');
  const resultado = velocidadeMedia(distanciaPercorrida, tempoGastado);
  console.log(`A velocidade media é ${resultado}`);
}

velocidade();

module.exports = { velocidade };