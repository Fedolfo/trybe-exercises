const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (array) => {
  let output = 0;
  for (const item in array) {
    output += array[item];
  }
  return output;
};
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);