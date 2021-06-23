// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

const numberChecker = (myNumber, number) => myNumber === number

const sorteio = (myNumber,callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
   
  return callback(myNumber , number) ? "Parabens você ganhou": 'tente novamente!' 
}
console.log(sorteio(2, numberChecker))


// const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));