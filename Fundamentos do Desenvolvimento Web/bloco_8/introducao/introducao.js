const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

const sum = (num1, num2) => num1 + num2
const sub = (num1, num2) => num1 - num2
const multi = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2

const calculator = (func) => func(10,5)

console.log(calculator(sum))
console.log(calculator(sub))
console.log(calculator(multi))
console.log(calculator(div))

/*Exercise introdução
Vamos praticar com os seguintes exercícios:
1 - Crie uma função que retorne a string 'Acordando!!' ;
2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:*/

const goodMorning = () => "Acordando!";
const breakFast = () => "Bora tomar café!"
const toSleep = () => "Partiu dormir!";

const doingThings = (callback) => {
  const result = callback()
  console.log(result)
}
// Ao chamar a função doingThings:
doingThings(goodMorning) 
doingThings(breakFast) 
doingThings(toSleep) 

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!