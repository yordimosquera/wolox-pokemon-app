import React, { useContext } from 'react';
import PokemonList from './PokemonList';
import PokemonContext from '../../store/Pokemon/context';

const PokemonListContainer = ({ ...rest }) => {
  const pokemonContext = useContext(PokemonContext);
  return <PokemonList {...rest} pokemonContext={pokemonContext} />;
};

export default PokemonListContainer;
