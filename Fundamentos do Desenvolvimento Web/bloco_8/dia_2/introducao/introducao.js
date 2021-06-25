/*No exemplo acima, foi executado para cada elemento do array a função multipliesFor2 , que imprime o parâmetro element * 2 no console.
 */

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);

/*Como se pode fazer isso? Veja este exemplo abaixo com o uso de index no forEach : */

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index, entrada) => {
//   names[index] = name.toUpperCase();
//   console.log(index)
//   console.log(entrada)
// }

// names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

/*Para fixar
1 - Use o método forEach chamando a callback showEmailList para apresentar os emails */

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// // Adicione seu código aqui
// emailListInData.forEach(showEmailList)

/*Para fixar
1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
 */
// const numbers = [19, 21, 30, 3, 45, 22, 15];


// const findDivisibleBy3And5 = (number) => {
//   // Adiciona seu código aqui
//   const isEven = numbers.find((number) => number % 5 === 0);
//   return isEven 
// }

// console.log(findDivisibleBy3And5(numbers))

/*2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
 */
// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   // Adicione seu código aqui:
//  return names.find((name) => name.length === 5);

// }

// console.log(findNameWithFiveLetters());

/*3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
*/

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic(id) {

//    return musicas.find((name) => name === name);
// }

// console.log(findMusic('31031685'))


/*1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ; */

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   //Adicione seu código aqui
//   return arr.some(arrVal => name === arrVal);
// }
//   //   return arr.some(function(arrVal) {
//   //   return val === arrVal;
//   // }


// console.log(hasName(names, 'Ana'))

/*2 Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ; */
// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   //Adicione seu código aqui
//   return arr.every((person) => person.age >= minimumAge);}

// console.log(verifyAges(people, 18));

/*1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente . */

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// people.sort((a, b) => (a.age > b.age) ? 1 : -1)

people.sort(function(a, b) {
  return a.age - b.age;
});

// people.sort(function (a, b) {
//   if (a.age > b.age) {
//     return 1;
//   }
//   if (a.age < b.age) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// });

console.log(people);