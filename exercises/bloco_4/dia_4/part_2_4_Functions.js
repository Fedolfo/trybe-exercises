/*5- Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
*/

let array = [2, 3, 2, 2, 5, 8, 2, 3];


function myFunc(arr){
  let counter = 0;
  let result = array[0];
  let aux = 0;

    for (let i = 0; i < array.length; i++){
      for (let j = 0; j < array.length; j++){
        if(array[i] === array[j]) {
          aux++;
        }
    }
    if(aux > counter) {
      result = array[i];
      counter = aux;
      aux = 0;
    }
 }
  return result
}
console.log(myFunc(array))