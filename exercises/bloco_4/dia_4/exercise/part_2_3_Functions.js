/*4- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.*/
let array =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maior_nome = array[0]

function participantes(arr){
for(let i = 0; i < array.length; i += 1) {
  if(array[i].length > maior_nome.length){
    maior_nome = array[i]
  }
 }
  return maior_nome;
}

console.log(participantes(array))