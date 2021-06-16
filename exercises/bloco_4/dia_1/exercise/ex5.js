/*5 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
*/
let a = 60;
let b = 60;
let c = 60;

if (a < 0 || b < 0 || c < 0){
  console.log("error")
}if (a + b + c === 180){
  console.log(true)
}else {
  console.log(false)
}
