import {
  FETCHING_POKEMON,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILED,
  FETCH_POKEMON_DETAILS_SUCCESS
} from './types';

export default (state, action) => {
  const reducer = {
    [FETCH_POKEMON_SUCCESS]: {
      ...state,
      status: 'loaded',
      pokemon: action.payload,
      error: false
    },
    [FETCHING_POKEMON]: {
      status: 'loading',
      ...state
    },
    [FETCH_POKEMON_FAILED]: {
      status: 'not loaded',
      ...state,
      error: action.error
    },
    [FETCH_POKEMON_DETAILS_SUCCESS]: {
      ...state,
      pokemonChosedDetails: action.payload
    }
  };
  return reducer[action.type] ? reducer[action.type] : state;
};
