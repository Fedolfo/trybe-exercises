const uppercase = require('../upperCase');

describe('Testando a função upperCase', () => {
  it(`uppercase 'test' to equal 'TEST'`, (done) => {
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done();
    });
  });
});