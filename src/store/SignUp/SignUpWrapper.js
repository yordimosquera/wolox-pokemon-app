import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import { signUp } from './actions';
import context from './context';

const SignUpWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { token: null });
  const { status = 'not loaded', token = null, error } = state;

  const userSignUp = (userData, countries) =>
    signUp({ dispatch, userData, countries });

  return (
    <context.Provider value={{ status, error, token, userSignUp }}>
      {children}
    </context.Provider>
  );
};

SignUpWrapper.propTypes = {
  children: PropTypes.node
};

export default SignUpWrapper;
