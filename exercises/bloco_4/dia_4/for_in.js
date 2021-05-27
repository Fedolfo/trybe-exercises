// // pedidos de pizza / object
// let pizzas = {
//   sabor:"Palmito",
//   preco: 39.90,
//   bordaCatupiry: true
// };
// //for variavel in (pizzas(object))(faz loop de acordo com quantos itens tem dentro do object)
// for (let key in pizzas) {
//   //no console.log(o primeiro key mostra a chave do object)
//     //o pizzas[key] mostra o valor do object pizzas
//   console.log(key ,pizzas[key]);
// }

// let pizzasDoces = ["Chocolate", "Banana", "Morango"];
// //variavel pizzasDoces (array) faz loop de acordo com quantos itens tem dentro do array
// for (let key in pizzasDoces) {
//   //No comando console.log(key mostra qual é o índice)
//     //pizzaDoces[key] mostra a nomenclatura  que está dentro do array
//   console.log(key, pizzasDoces[key])
// }

//1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};
for (let key in names) {
  console.log("Olá", names[key])
}

//2- Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for(let key in car) {
  console.log(key, car[key])
}