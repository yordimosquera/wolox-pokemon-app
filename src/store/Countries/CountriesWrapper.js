import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import { fetchCountries } from './actions';
import context from './context';

const CountriesWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { countries: [] });
  const { status = 'not loaded', countries = [], error } = state;

  const getCountries = () => fetchCountries({ dispatch });

  return (
    <context.Provider value={{ countries, status, error, getCountries }}>
      {children}
    </context.Provider>
  );
};

CountriesWrapper.propTypes = {
  children: PropTypes.node
};

export default CountriesWrapper;
