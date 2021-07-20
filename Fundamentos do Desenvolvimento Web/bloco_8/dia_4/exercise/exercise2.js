const assert = require('assert');
// Para os exercícios 2, 3 e 4 considere o seguinte array:
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//2 Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.map(book=> book.author.name).reduce((acc,current)=> `${acc}, ${current}`) + `.`
}
console.log(reduceNames())
assert.strictEqual(reduceNames(), expectedResult);

const expectedResult2 = 43;


//3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge() {
  const TotalLivros = books.length;// total 6 , porque são 6 objetos(livros)
  const sumOfAges = books.reduce((sum, book) => (     //sum representa o acumulador e book o valor atual
    sum + (book.releaseYear - book.author.birthYear)
  ), 0);
  return sumOfAges / TotalLivros;
}
// vai pegar o ano de publicação de cada livro e subtrair do ano de nascimento do autor. 
//Exemplo gorge martin release year 1991 - bitrhyear:1948. Total 39, vai fazer isso com todos os livros 
//e isso vai totalizar 258 anos. 
//Como ele quer a média e são 6 livros, fica 258anos/6= 43
console.log(averageAge())
assert.strictEqual(averageAge(), expectedResult2);


//4 - Encontre o livro com o maior nome.

const expectedResult3 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((biggestBook, currentBook) => {//biggest book/representa acumulator e currentbook representa o current value
    if (currentBook.name.length > biggestBook.name.length) {//sempre compara um livro com o outro pegando o comprimento do maior nome para comparação
      return currentBook;
    }
    return biggestBook;
  });
}

assert.deepStrictEqual(longestNamedBook(), expectedResult3);

//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// function containsA() {
//   return names.reduce((accumulator, currentValue) => accumulator + currentValue)
// }
// console.log(containsA())
// assert.deepStrictEqual(containsA(), 20);

// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .


const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

  function studentAverage() {
    return students.map((aluno, index) => {//segundo parametro do map é o index
      return {
      name: aluno,// vai vir aluno por aluno
      average: grades[index].reduce((acc, nota) => acc + nota) / grades[index].length //o mesmo index do aluno é também das notas o indice 0 de alunos representa o Pedro e o indice 0 das notas representa notas do pedro
    }})
  }

console.log(studentAverage())
const expected1 = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

// assert.deepStrictEqual(studentAverage(), expected1);