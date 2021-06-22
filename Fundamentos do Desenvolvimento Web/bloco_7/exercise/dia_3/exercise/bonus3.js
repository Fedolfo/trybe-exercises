const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (words) => {
  const middleIndex = Math.floor(words.length / 2);
  const output = [words[middleIndex]];
  words.splice(middleIndex, 1);
  return output;
};

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);