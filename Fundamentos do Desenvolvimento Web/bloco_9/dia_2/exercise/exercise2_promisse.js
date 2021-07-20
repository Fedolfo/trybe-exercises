const createPromisse = () => {
  const array = Array.from( { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );
  const sum = array.map((number) => number * number)
                       .reduce((number, acc) => number + acc, 0);
  if (sum >= 8000) {
    throw new Error();
  };

  return sum;
}

const sumArry = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

const regraPromisse = async () => {
  try {
    const sumRandom = await createPromisse();
    const CatchSum = await sumArry(sumRandom);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada');
  }
}

regraPromisse()