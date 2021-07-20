function encode(nome) {
  let saida = '';
  let obje = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let i = 0; i < nome.length; i += 1) {
    if (obje[nome[i]]) {
      saida += obje[nome[i]];
    } else {
      saida += nome[i];
    }
  }
  return saida;
}
console.log(encode('Hello! hello!'));

function decode(string) {
  let saida = '';
  let obje = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (const chaveValor of string) {
    if (obje[chaveValor]) { /* verifica se existe */
      saida += obje[chaveValor]; /* adiciona o valor da chave */
    } else {
      saida += chaveValor; /* letra */
    }
  }

  return saida;
}

module.exports = { 
  encode,
  decode,
};