const imc = (peso, altura) => Math.round(peso / Math.pow(altura, 2));
const readline = require('readline-sync');

function indiceMassaCorporal() {
  const nome = readline.question('Qual seu nome?\n ');
  const altura = readline.questionInt('Qual sua altura?\n ');
  const peso = readline.questionFloat('Qual sua peso?\n ');
  const resultado = imc(peso, altura);
  let conclusion = '';
  if (resultado < 18.5) {
    conclusion = 'abaixo do peso(magreza)';
  } else if (resultado > 18.5 && resultado <= 24.9) {
    conclusion = 'peso normal';

  } else if (resultado > 25.0 && resultado <= 29.9) {
    conclusion = 'acima do peso (sobrepeso)';

  } else if (resultado > 30.0 && resultado <= 34.9) {
    conclusion = 'obesidade grau I';

  } else if (resultado > 35.0 && resultado <= 39.9) {
    conclusion = 'obesidade grau II';

  } else {
    conclusion = 'obesidade graus III e IV';
  }
  console.log(`${nome} tem um indice de massa corporal de ${resultado}, está ${conclusion}`);
}

indiceMassaCorporal();

module.exports = { indiceMassaCorporal };