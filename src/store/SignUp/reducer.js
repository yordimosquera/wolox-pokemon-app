import { SIGNUP_ERROR, SIGNUP_IN_PROGRESS, SIGNUP_SUCCESSFUL } from './types';

export default (state, action) => {
  const reducer = {
    [SIGNUP_SUCCESSFUL]: {
      ...state,
      status: 'Signed in',
      token: action.payload
    },
    [SIGNUP_IN_PROGRESS]: {
      ...state,
      status: 'loading'
    },
    [SIGNUP_ERROR]: {
      ...state,
      status: 'not loaded',
      error: action.error
    }
  };
  return reducer[action.type] ? reducer[action.type] : state;
};
