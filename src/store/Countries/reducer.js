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
      status: 'loading',
      ...state
    },
    [FETCH_COUNTRIES_FAILED]: {
      status: 'not loaded',
      error: action.error,
      ...state
    }
  };
  return reducer[action.type] ? reducer[action.type] : state;
};
