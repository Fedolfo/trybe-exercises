const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// lesson2['turno'] = "Manhã"
// function morningShift () {
//   const classe = lesson2
//   classe['turno'] = 'Manhã'
// }
// morningShift()

/*1 Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.*/
const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

/*2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
 */

/* Código abreviada ! 
const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));*/

const listsKeys = (lesson) => {
  const objectKey = Object.keys(lesson)
    for (const key in objectKey) {
     console.log(`${objectKey[key]}`)
    }
}

listsKeys(lesson1)

/*3 Crie uma função para mostrar o tamanho de um objeto.
 */

// const listSize = (size) => {   Maneira errada!!
// Object.entries(size).length
//   for (const index in entry) {
//     console.log(`${entry[index]}`)
//   }
// }
// listSize(lesson3)

const listSize = (size) => Object.entries(size).length
console.log(listSize(lesson3))

/*4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.*/

const listValues = (value) => {
  const sendValue = Object.values(value)
  for(const i in sendValue) {
    console.log(`${sendValue[i]}`)
  }
}
// Código abreviado!!

// const listValues = (obj) =>  Object.values(obj);
// console.log(listValues(lesson1));

listValues(lesson1)

/*5 Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . */

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

/*6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */

function maxStudents (obj){
  let total = 0
  const array = Object.keys(obj);
  for (const index in array){
  total += obj[array[index]].numeroEstudantes
  }
  return total
}
console.log(maxStudents(allLessons))

/*7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: */
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 2));

/*8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave */

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
