/*2- Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .*/ 

// function inteiroArray(valor) {
//   return Math.max(...valor)
// }
// let testArray = [2, 3, 6, 7, 10, 1];
// console.log(inteiroArray(testArray))

// function inteiroArray() {
  
// }
function arrayInteiros(valor) {
  let maiorValor = 0;
  for(let key in valor) {
    if(valor[maiorValor] < valor[key]){
      maiorValor = key
    }
  }
  return maiorValor
}
console.log(arrayInteiros([2, 3, 6, 7, 10, 1]))