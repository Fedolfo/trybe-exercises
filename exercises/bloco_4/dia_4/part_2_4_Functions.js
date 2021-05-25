/*5- Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
*/

let array = [2, 3, 2, 5, 8, 2, 3];
let counter = 0;
let result = array[0];
let aux = 0;

for(let i = 0 ; 1 < array.length; i += 1){
    for(let j = 0; j < array.length; j += 1){
      if(array[i] === array[j]) {
        aux++;
      }
    }
    if(aux > counter) {
      result = array[i]
      counter = aux
      aux = 0
    }
 }
 console.log(result)