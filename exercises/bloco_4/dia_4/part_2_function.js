/*1- Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

function isPalindromo(l) {
  x = l.split("").reverse().join("");
  return (x == l) ? true : false;
}

console.log(isPalindromo("arara"))
console.log(isPalindromo("desenvolvimento"))


// referência: https://bognarjunior.wordpress.com/2018/01/17/exercicios-resolvidos-3/

/*Primeiro com a função split(), transformei um string em uma array, tendo uma array eu posso utilizar a função reverse(), que inverte a ordem dos elementos de uma array e por último utilizei a função join(), que junta os elementos de uma array em uma string.

Agora temos tanto a variável (l), quanto a variável (x) e posso compara-las, se elas forem iguais, então retorno true, se forem diferentes retorno false. */