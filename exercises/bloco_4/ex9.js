/*9 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

const a = 30
const b = 20
const c = 111

if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
  console.log("algum numero é impar")
}else{
  console.log("não é impar")
}