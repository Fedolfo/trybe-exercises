import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()! Regra feita pra não ter uma piada antiga é render uma nova piada em cima dela
      // dessa forma renderiza o loading é depois a piada nova!
      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false, // Depois que a requisição nova chega, o loading e retirado e atribui a piada nova
        jokeObj: requestObject
      });
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj] // salva novas piadas no array[storedJokes] usando o spread operator pra ser em um mesmo array
      // jokeObj e atribuido nesse array unico.
    }));

    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      <p>{loading ? loadingElement : this.renderJokeElement() }</p> {/* É atribuido o loading como condição, pra retornar o loadingElement
      caso a piada não seja renderezida assim que é renderizada o else retorna a piada para a aplicação */}

      </div>
    );
  }
}

export default DadJoke;
