import countries from '../../api/countries';
import {
  FETCHING_COUNTRIES,
  FETCH_COUNTRIES_FAILED,
  FETCH_COUNTRIES_SUCCESS
} from './types';

export const fetchCountries = async ({ dispatch }) => {
  try {
    dispatch({
      type: FETCHING_COUNTRIES
    });
    const data = await countries.get();
    dispatch({
      type: FETCH_COUNTRIES_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({ type: FETCH_COUNTRIES_FAILED, error });
  }
};
