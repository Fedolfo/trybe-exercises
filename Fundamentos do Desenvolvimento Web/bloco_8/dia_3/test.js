/*                      

              Array.map()

*/

// const arr1 = [1, 2, 3];                 <=== sem o uso do map ele faz o papel do colchete vazio  ===>
// const arr2 = [];                       <=== o map ele substitui esse colchete vazio que ia receber um valor ===>
// for(let i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i] * 2);
// }
// prints [ 2, 4, 6 ]
// console.log(arr2);

// const arr2 = arr1.map(item => item *2); //o propio map cria um novo array sem precisar de um array vazio 
// arr2.sort(function(a, b) {
//   return b - a;
// });
// console.log(arr2); //[ 6, 4, 2 ]

/*Digamos que temos uma matriz contendo o ano de nascimento de pessoas diferentes e queremos criar uma matriz que contém suas idades. Por exemplo: */

/*
const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = [];
for(let i = 0; i < birthYear.length; i++) {         //vai percorrer o array birthYear e pegar os valores
  let age = 2018 - birthYear[i];             //foi criado uma variavel 2018 e fez uma subtração com o array birthYear[i]; 
  ages.push(age);                         //dando push para o array vazio ages, fazendo o calculo em qual idade estaria se uma pessoa nascesse em determinado tempo
}
// prints [ 43, 21, 16, 23, 33 ]
console.log(ages);
*/

const birthYear = [1975, 1997, 2002, 1995, 1985];  //podemos ver que agora usando o map não precisamos dnv do array vazio
const ages = birthYear.map((year) => {             //o propio map é o array vazio onde ele vai criar um constante ages
 return `2018 - ${year} = ${2018 - year}`
})
// prints [ 43, 21, 16, 23, 33 ]
console.log(ages);

/*O filter() método cria uma nova matriz com todos os elementos que passam no teste fornecido pela função de retorno de chamada. A função callback passado para o filter() método aceita 3 argumentos: element, index, e array. */


/*Digamos que temos um array que contém objetos com propriedades de nome e idade. Queremos criar uma matriz que contenha apenas as pessoas com idade maior (idade maior ou igual a 18). */

/*
const persons = [                     Metodo génerico
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24},
];
const fullAge = [];
for(let i = 0; i < persons.length; i++) {
  if(persons[i].age >= 18) {
    fullAge.push(persons[i]);
  }
}
console.log(fullAge);
*/

const persons = [                    //metodo usando o filter, o filter ele tem uma diferança que pega todos os valores do comando que proponho para ele fazer,
  { name: 'Peter', age: 16 },        //diferente do find onde ele vai retornar um valor se for verdadeiro
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24},
];
const oneAge = persons.find(person => person.age >=18)  // { name: 'Mark', age: 18 } vai retornar o primeiro valor que retorna true
const fullAge = persons.filter(person => person.age >= 18); //lógica de pegar pessoas maior de 18
const nomeMenorIgual = persons.filter(person => person.name.length <= 4); //lógica de pegar nomes de 1 a 4 caracteres,
console.log(fullAge);
console.log(nomeMenorIgual)
console.log(oneAge)


//map usando objeto e colocando dentro de uma array os nomes dos users

users = [
  {
    name: 'Yazeed',
    age: 25
  },
  {
    name: 'Sam',
    age: 30
  },
  {
    name: 'Bill',
    age: 20
  }
];
const getName = (user) => user.name;
const usernames = users.map(getName);

console.log(usernames);
// ["Yazeed", "Sam", "Bill"]


//o filter sendo usado para pegar a primeira letra de uma pessoa

const startsWithB = (string) => string.toLowerCase().startsWith('b');

const namesStartingWithB = users.filter((user) => startsWithB(user.name));

console.log(namesStartingWithB);
// [{ "name": "Bill", "age": 20 }]


let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);