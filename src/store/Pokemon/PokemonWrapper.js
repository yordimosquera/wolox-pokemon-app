import React, { useReducer } from 'react';
import reducer from './reducer';
import { fetch, fetchByIdOrName, fethPokemonDetails } from './actions';
import context from './context';

const PokemonWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { pokemon: [] });
  const {
    status = 'not loaded',
    pokemon = [],
    error,
    pokemonChosedDetails = []
  } = state;

  const getPokemon = ({ offset, limit }) => fetch({ dispatch, offset, limit });
  const getPokemonByIdOrName = nameOrId =>
    fetchByIdOrName({ dispatch, nameOrId });
  const getPokemonDetails = pokemonToFind =>
    fethPokemonDetails({ dispatch, pokemonToFind });

  return (
    <context.Provider
      value={{
        pokemon,
        status,
        error,
        getPokemon,
        getPokemonByIdOrName,
        getPokemonDetails,
        pokemonChosedDetails
      }}
    >
      {children}
    </context.Provider>
  );
};

export default PokemonWrapper;
