import React from 'react';
import '../App.css';

class Pokemon extends React.Component {
  render() {
    const { pokeInfo } = this.props;
    return (
      <section className='cardPokemon'>
        <h1 className='titlePokemon'>{ pokeInfo.name }</h1>
        <span>{ pokeInfo.type }</span>
        <p>{ `Peso: ${pokeInfo.averageWeight.value } ${ pokeInfo.averageWeight.measurementUnit }`}</p>
        <img src={ pokeInfo.image } alt={ pokeInfo.name } />
      </section>
    );
  }
}

export default Pokemon;