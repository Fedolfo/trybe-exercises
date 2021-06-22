function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable; // we reduce this below

  if (paid < payable) throw new Error('paid value is not enough');

  for (let index = 0; index < length; index += 1) { // loop through array of notes & coins:
    const coin = coins[index];
    const timesCoinFits = Math.floor(remaining / coin); // no partial coins

    if (timesCoinFits >= 1) { // check coin fits into the remaining amount
      for (let j = 0; j < timesCoinFits; j += 1) { // add coin to change x times
        change.push(coin);
        remaining -= coin; // subtract coin from remaining
      }
    }
  }
  return change;
}

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);