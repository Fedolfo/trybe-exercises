/*6-Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.*/ 

function inteiroN(array){
  let soma = 0;
  for (let i = 1; i <= array; i += 1){
    soma = soma + i
  }
 
  return soma
}
console.log(inteiroN(5))