import React, { useReducer } from 'react';
import reducer from './reducer';
import { signUp } from './actions';
import context from './context';

const SignUpWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { token: null });
  const { status = 'not loaded', token = null, error } = state;

  const userSignUp = userData => signUp({ dispatch, userData });

  return (
    <context.Provider value={(status, error, token, userSignUp)}>
      {children}
    </context.Provider>
  );
};

export default SignUpWrapper;
