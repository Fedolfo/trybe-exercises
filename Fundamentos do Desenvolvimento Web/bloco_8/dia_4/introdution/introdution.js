// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 100);
// console.log(bigger); // 85


// Tente criar uma usando reduce e filter , e outra apenas usando reduce .
// Solução usando filter e reduce :
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getEven = (number) => number % 2 === 0;
// const sumPair = (currentValue, number) => currentValue + number;

// const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers)); // 152

//Solução usando apenas reduce :
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

// console.log(sumNumbers(numbers)); // 152

const pessoas = [
  {
    nome: 'Ayrton',
    idade: 27
  },
  {
    nome: 'João',
    idade: 14
  },
  {
    nome: 'Maria',
    idade: 23
  },
  {
    nome: 'Joana',
    idade: 21
  },
  {
    nome: 'Lucas',
    idade: 32
  },
  {
    nome: 'Mateus',
    idade: 15
  },
  {
    nome: 'Isa',
    idade: 23
  },
  {
    nome: 'Luiza',
    idade: 17
  }
];

 const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray) {
  const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores';

  valorAcumulador[propMaiorOuMenor].push(valorArray);

  return valorAcumulador;
 }, { maiores: [], menores: []})

 console.log('pessoasAgrupadas', pessoasAgrupadas);
 /*
  {
    maiores: [
      {
        nome: 'Ayrton',
        idade: 27
      },
      {
        nome: 'Maria',
        idade: 23
      },
      {
        nome: 'Joana',
        idade: 21
      },
      {
        nome: 'Lucas',
        idade: 32
      },
      {
        nome: 'Isa',
        idade: 23
      },
    ],
    menores: [
      {
        nome: 'João',
        idade: 14
      },
      {
        nome: 'Mateus',
        idade: 15
      },
      {
        nome: 'Luiza',
        idade: 17
      }
    ]
  }
 */
  const numbers = [2, 3, 4, 6, 8, 12, 24];

  const sumWithReduce = numbers.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator} - currentValue: ${currentValue}`);
    return accumulator + currentValue;
  }, 0);

  const epic = ['A', 'long', 'time', 'ago,', 'in a', 'galaxy', 'far far', 'away...'];

const epicPhrase = epic.reduce((previousValue, currentValue) => {
  console.log(`previousValue: ${previousValue} - currentValue: ${currentValue}`);
  return `${previousValue} ${currentValue}`;
}, );

console.log(epicPhrase);

const sumEvenNumbers = numbers
  .filter((number) => number % 2 === 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sumEvenNumbers);
