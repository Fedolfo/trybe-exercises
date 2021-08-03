// App.js
import React, { Component }from 'react';

class ApiRick extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

   fetchCharacters =  async () => {
    try {
    const requestReturn = await fetch('https://rickandmortyapi.com/api/character');
    const requestObject = await requestReturn.json();
    this.setState({characters: requestObject.results});
    } catch (error){
      alert(`Ocorreu um erro!`, (error));
    }
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default ApiRick;
