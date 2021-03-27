import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import {
  fetch,
  fetchByIdOrName,
  fethPokemonDetails,
  setPokemonChoosedDetails
} from './actions';
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

  const setPokemonTeamChoosed = (name, pokemonTeam) =>
    setPokemonChoosedDetails({ dispatch, name, pokemonTeam });

  return (
    <context.Provider
      value={{
        pokemon,
        status,
        error,
        getPokemon,
        getPokemonByIdOrName,
        getPokemonDetails,
        pokemonChosedDetails,
        setPokemonTeamChoosed
      }}
    >
      {children}
    </context.Provider>
  );
};

PokemonWrapper.propTypes = {
  children: PropTypes.node
};

export default PokemonWrapper;
