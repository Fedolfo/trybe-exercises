// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
      nome: '',
      email: '',
    }
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke }));
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="App">
        {this.state.joke}
        <h1>Teste de inputs</h1>
        <p>
          Nome:
          <input
            onChange={(e) => this.handleInput(e)}
            name='nome'
            value={this.state.nome}
            data-testid='input-nome'
          />
        </p>
        <p>
          E-mail:
          <input
            onChange={(e) => this.handleInput(e)}
            name='email'
            value={this.state.email}
            data-testid='input-email'
          />
        </p>
      </div>
    );
  }
}

export default App;
