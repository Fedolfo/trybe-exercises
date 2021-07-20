// setTimeout(() => {
//   console.log('Comprar parafusos') // Comprar parafusos
//   console.log('Adicionar ao estoque') // Adicionar ao estoque
// }, 2000);

// console.log('1 - Receber roda'); // 1 - Receber roda
// console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

  // const assert = require('assert');

  // const pushNumber = (list, number) => list.push(number);

  // let numbers = [];

  // pushNumber(numbers, 1);
  // pushNumber(numbers, 2);
  // pushNumber(numbers, 3);

  // assert.deepStrictEqual(numbers, [1, 2, 3]);

      // const assert = require('assert');

      // const pushNumber = (list, number) => list.push(number);

      // let numbers = [];

      // setTimeout(() => pushNumber(numbers, 1), 3000);
      // pushNumber(numbers, 2);
      // pushNumber(numbers, 3);

      // assert.deepStrictEqual(numbers, [1, 2, 3]); // essa validação falha

          // const assert = require('assert');

          // const pushNumber = (list, number) => {
          //   list.push(number);
          //   console.log(list);
          // };
          
          // let numbers = [];
          
          // setTimeout(() => pushNumber(numbers, 1), 3000);
          // pushNumber(numbers, 2);
          // pushNumber(numbers, 3);
          
          // setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);

            const myExpenses = [
              {
                gym: 99,
              },
              {
                ifood: 200,
              },
              {
                phone: 60,
              },
              {
                internet: 100,
              },
            ];
            
            const myIncome = 1000;

            const monthlyBudget = (myIncome, myExpenses, callback) => {
              // monthyBudget função com 3 parametros onde vai receber o pagamento, despesas é uma callback
              // onde essa callback pode fazer algum tipo de mudança que desejar calcular algo, deixar dentro de uma
              // array anyway!
              const totalExpenses = callback(myExpenses); // a  callback vai receber a função hadleExpenses
              //onde a callback vai receber myExpenses array object. Com todo o calculo já feito,
              console.log(totalExpenses,'gasto');

              const totalAfterExpenses = myIncome - totalExpenses; // colocando o total do salário
              // menos o total expenses que seria 459 reais dos produtos comprados na loja.
              // assim fazendo 1000 - 459 = 541, sobrando 541 de saldo.
              console.log(totalAfterExpenses,'saldo');
            
              console.log(`Balanço do mês:
                Recebido: R$${myIncome},00 
                Gasto: R$${totalExpenses},00
                Saldo: R$${totalAfterExpenses},00 `); // fim do percuso da função que faz a junção de 2 funções, isso é HOF!!
            };

            const handleExpenses = myExpenses => { // Criado uma função com parametro pra myExpense, onde será usado para fazer a ligação da callback;
              const eachValue = myExpenses.map((item) => Object.values(item)[0]);
              console.log(eachValue, 'map') //criado uma váriavel eachValue pra guardar os array Object. Pegando apenas
              // o valores deles e colocando dentro de um array;

              const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
              console.log(totalExpense, 'reduce') // criado uma váriavel onde vai ter uma da variavel eachValue fazendo o calculo
              // do array de eachValue com o reduce dando um total de 459 dos gastos

              return totalExpense; // retornando para a handleExpenses
            };
            
            monthlyBudget(myIncome, myExpenses, handleExpenses); 
            // 3 parametros onde está recebendo o salário, é as despesas é o terceiro está recebendo callback
            console.log(myIncome,'meu salario', myExpenses, 'Despesas', handleExpenses)