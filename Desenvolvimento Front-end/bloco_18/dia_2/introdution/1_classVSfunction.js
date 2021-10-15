/*
O useState é o hook mais comum e ele permite que você utilize o state e outros
recursos do React sem escrever uma classe.
Para entender melhor do que estamos falando, veja este componente com
Estado feito com uma classe e em seguida o mesmo componente feito com hooks :
*/

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <div>Counter: {counter}</div>
        <button
          type="button"
          onClick={() =>
            this.setState((prevState) => ({ counter: prevState.counter + 1 }))
          }
        >
          Increase Counter
        </button>
      </div>
    );
  }
}

export default App;