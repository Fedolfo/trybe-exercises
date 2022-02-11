// function randomNumbers() {
//   let threeNumbers = [...Array(3)].map(() => Math.floor(Math.random() * 100 + 1))
//   return threeNumbers;
// }

function randomNumbers() {
  return Math.floor(Math.random() * 100 + 1);
}

// console.log(randomNumbers().toString());

module.exports = { randomNumbers };