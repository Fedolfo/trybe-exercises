//Object.keys
const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};
const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};
console.log(Object.keys(student1));
console.log(Object.keys(student1)[0]);
console.log(" ");
console.log(student1[Object.keys(student1)[2]]);
console.log(" ");
console.log(student1);
console.log(student1["Html"]);

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]} é ${student[arrayOfSkills[index]]}`);
  }
};
console.log("Estudante 1");
listSkills(student1);
console.log("Estudante 2");
listSkills(student2);

/*                                                                                               */
/*                                                                                                */
/*                             Object.values                                                         */
/*                                                                                               */

const student = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkill: "Ótimo",
};

// const listSkillsValuesWithFor = (student) => {  //forma de transformar um objeto em array, mas não usando Object.values
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

const listSkillsValuesWithValues = (student) => Object.values(student); //transforma o valor de um objeto em arrayStrings, forma simplificada usando Object.values

// Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));

/*                                                                                               */
/*                                                                                                */
/*                             Object.entries                                                        */
/*                                                                                               */
const países = {
  França: "Paris",
  Brasil: "Brasília",
  Espanha: "Madrid",
  Portugal: "Lisboa",
};
const pairKeyValue = Object.entries(países);
for (index in pairKeyValue) {
  console.log("--------");
  console.log("País:", pairKeyValue[index][0]);
  console.log("Capital:", pairKeyValue[index][1]);
}

/*                                                                                               */
/*                                                                                                */
/*                             Object.assign                                                         */
/*                                                                                               */

const person = {
  name: "Alberto",
  lastName: "Gomes",
  age: 20,
};

const info = {
  age: 23,
  job: "engenheiro",
};

const family = {
  children: ["Maria", "João"],
  wife: "Ana",
};

Object.assign(person, info, family);
console.log(person);

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);