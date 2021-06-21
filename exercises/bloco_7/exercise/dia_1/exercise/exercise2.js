function fatorial(n) {
  let resultado = n;
  for (let i = 1; i < n; i += 1) {
  resultado *= i;
  }
  return resultado
}
console.log(`${fatorial(2)}`)  //!2= (2*1)
console.log(`${fatorial(5)}`)  //!5= (5*4*3*2*1)
console.log(`${fatorial(7)}`)  //!7= (7*6*5*4*3*2*1)
console.log(`${fatorial(10)}`)  //!10= (10*9*8*7*6*5*4*3*2*1)


let longestWord = ("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
function maiorPalavra(string) {
  let arrayStr = string.split(" ");
  let maior = 0;
  let palavra = null;
  arrayStr.forEach(function(str) {
      if (maior < str.length) {
          maior = str.length;
          palavra = str;
      }
  });
  return palavra;
}
console.log(maiorPalavra(longestWord))