const assert = require('assert');

const getLargestNumber = (array) => {
  let largestNumber = array.slice().sort((a, b) => b - a);
  console.log(parameter);
  return largestNumber[0];
}

const parameter = [45, 8, 2, 50, 99, 1, 7];
const result = 99;

const output = getLargestNumber(parameter);
const unchangedArray = [45, 8, 2, 50, 99, 1, 7];

assert.strictEqual(output, result);
assert.deepStrictEqual(parameter, unchangedArray);