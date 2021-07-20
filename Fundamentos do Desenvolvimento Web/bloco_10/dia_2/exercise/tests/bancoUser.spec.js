const getUserName = require('../bancoUser');

// describe('getUserName - promise', () => {
//   describe('when the user id exists', () => {
//     it('returns the user name', () => {
//       expect.assertions(1);
//       return getUserName(4).then(data => expect(data).toEqual('Mark'));
//     });
//   });

//   describe('when the user id does not exists', () => {
//     it('returns an error', () => {
//       expect.assertions(1);
//       return getUserName(2).catch(error =>
//         expect(error).toEqual({ error: 'User with 2 not found.' })
//       );
//     });
//   });
// });


describe('verifica o resultado da função getUserName para o caso em que o usuário é encontrado', () => {
  it('verifica o resultado em que o usuário é encontrado', async () => {
    const data = await getUserName(4);
    expect(data).toEqual('Mark');
  });
});

describe('verifica para o caso em que o usuário não é encontrado.', () => {
  it('verifica caso o resultado do usuário não é encontrado',async () => {
    try {
     await getUserName(1);
    } catch(error) {
      expect(error).toEqual({error: 'User with 1 not found.'});
    }
  });
});