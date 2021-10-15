/*
createContext retorna um objeto que possui dois componentes como propriedades: Provider e Consumer.

O valor passado como parâmetro para createContext será utilizado como o valor padrão do contexto, caso nenhum valor seja especificado ao utilizar o Provider .

Provider é responsável por "prover" os dados para os componentes que estão nos níveis abaixo dele na árvore de componentes. Ele aceita uma prop obrigatória value com os dados que serão compartilhados. Esse valor pode ser qualquer valor JavaScript, como um número, string, array ou objeto.

*/

// mycontext.js
import React, { createContext } from "react";

const MyContext = createContext(defaultValue);

// components
const contextvalue = {
  any: this.state,
  algo: this.function,
};

<div>
  <MyContext.Provider value={/* algum valor compartilhado */ contextvalue}>
    <MyComponent />
    <MyOtherComponent />
    <MyOtherComponent />
    <MyComponent />
  </MyContext.Provider>
</div>;

// Consumer é utilizado sempre que um componente precisa "consumir" o valor do contexto.

function MyComponent() {
  return (
    <MyContext.Consumer>
      {(value) => {
        /* renderiza algo utilizando o valor recebido do contexto */
       { `Objeto ${value.any}`}
      }}
    </MyContext.Consumer>
  );
}
