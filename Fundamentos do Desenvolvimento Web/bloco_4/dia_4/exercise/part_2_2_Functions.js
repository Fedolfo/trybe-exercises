/*3- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.*/
let testArray = [2, 4, 6, 7, 10, 0, -3];

function menorArray(valor) {
  return Math.min(...valor)
}
console.log(testArray.indexOf(menorArray(testArray)))