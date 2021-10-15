import React from "react";
import "./App.css";

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);

    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
    };
  }

  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }), () => {
      console.log(`Botão 1 ${this.setColor(this.state.numeroDeCliques)}`)
    });
  };

  handleClick1 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }), () => {
      console.log(`Botão 2 ${this.setColor(this.state.numeroDeCliques1)}`)
    });
  }

  handleClick2 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }), () => {
      console.log(`Botão 3 ${this.setColor(this.state.numeroDeCliques2)}`)
    });
  }

  setColor = (num) => {
    return num % 2 === 0 ? 'green' : 'white'
  }
  render() {
    const { numeroDeCliques, numeroDeCliques1, numeroDeCliques2} = this.state
    return (
      <div>
        <button
         onClick={this.handleClick}
         style={{backgroundColor: this.setColor(numeroDeCliques)}}> botão 1 | count = {this.state.numeroDeCliques}
        </button>
        <button onClick={this.handleClick1}
        style={{backgroundColor: this.setColor(numeroDeCliques1)}}> botão 2 | count = {this.state.numeroDeCliques1}</button>
        <button onClick={this.handleClick2}
        style={{backgroundColor: this.setColor(numeroDeCliques2)}}> botão 3 | count = {this.state.numeroDeCliques2}</button>
      </div>
    );
  }
}

export default App;
