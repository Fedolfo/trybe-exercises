/*
    Exemplos de como é o funcionamento de um teste assincrono com o setTimeout 
    Simulando uma promisses
*/

// test("Não deveria passar!", done => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!')
//     done();
//   }, 500);
// });

// const SumNumbers = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 500)
// }

// test('Testando SumNumbers, soma 5 mais 10', done => {
//   SumNumbers(5, 10, (result) => {
//     expect(result).toBe(15);
//     done();
//   });
// })

/* **************************************************************************************************** */
/* **************************************************************************************************** */
/* **************************************************************************************************** */

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

/* **************************************************************************************************** */
/* **************************************************************************************************** */
/* **************************************************************************************************** */

/*
  Testes Assíncronos com then/catch
*/

/*
describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => {
    return getListAnimals('Lion').catch(error =>
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    );
  });
});
*/

/*
      Teste Assíncronos com async/Await
*/

/*
test('Testando com async/await', async () => {
  const listDogs = await getListAnimals('Dog');
  expect(listDogs[0].name).toEqual('Dorminhoco');
  expect(listDogs[1].name).toEqual('Soneca');
});

test('Testando com async/await, testando o reject', async () => {
  try {
    await getListAnimals('Lion');
  } catch (error) {
    expect(error).toEqual({ error: "Não possui esse tipo de animal." })
  }
});
*/

/* **************************************************************************************************** */
/* **************************************************************************************************** */
/* **************************************************************************************************** */

/*
        Matcher .resolves / .rejects
*/

describe('Testando promise - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ]
      expect.assertions(1);
      return expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
    });
  });
});

/*
  Matcher .resolves / .rejects, com Async/Await:
*/

describe('Testando Async/Await - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', async () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ]
      expect.assertions(1);
      await expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
    });
  });
});

/* **************************************************************************************************** */
/* **************************************************************************************************** */
/* **************************************************************************************************** */
