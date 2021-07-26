import React from 'react';
import pokemonsDate from '../pokemonData';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      pokemonsDate.map((pokemon) => <Pokemon key={pokemon.id} pokeInfo={pokemon}/>)
    )
  }
}

export default Pokedex;