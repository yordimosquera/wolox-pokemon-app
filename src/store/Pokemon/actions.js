import pokemon from '../../api/pokemon';
import {
  FETCHING_POKEMON,
  FETCH_POKEMON_FAILED,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_DETAILS_SUCCESS
} from './types';

export const fetch = async ({ dispatch, offset, limit }) => {
  try {
    dispatch({
      type: FETCHING_POKEMON
    });
    const data = await pokemon.get({ limit, offset });

    dispatch({
      type: FETCH_POKEMON_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({ type: FETCH_POKEMON_FAILED, error });
  }
};

export const fetchByIdOrName = async ({ dispatch, nameOrId }) => {
  try {
    dispatch({
      type: FETCHING_POKEMON
    });
    const data = await pokemon.getByIdOrName(nameOrId);

    dispatch({
      type: FETCH_POKEMON_SUCCESS,
      payload: { results: [data] }
    });
  } catch (error) {
    dispatch({ type: FETCH_POKEMON_FAILED, error });
  }
};

export const fethPokemonDetails = async ({ dispatch, pokemonToFind }) => {
  try {
    dispatch({
      type: FETCHING_POKEMON
    });

    const pokemonFound = await Promise.all(
      pokemonToFind.map(async item => await pokemon.getByIdOrName(item.name))
    );
    dispatch({
      type: FETCH_POKEMON_DETAILS_SUCCESS,
      payload: pokemonFound
    });
  } catch (error) {
    dispatch({ type: FETCH_POKEMON_FAILED, error });
  }
};
