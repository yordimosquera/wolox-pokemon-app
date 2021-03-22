import {
  FETCH_COUNTRIES_FAILED,
  FETCH_COUNTRIES_SUCCESS,
  FETCHING_COUNTRIES
} from './types';

export default (state, action) => {
  const reducer = {
    [FETCH_COUNTRIES_SUCCESS]: {
      ...state,
      status: 'loaded',
      countries: action.payload
    },
    [FETCHING_COUNTRIES]: {
      ...state,
      status: 'loading'
    },
    [FETCH_COUNTRIES_FAILED]: {
      ...state,
      status: 'not loaded',
      error: action.error
    }
  };
  return reducer[action.type] ? reducer[action.type] : state;
};
