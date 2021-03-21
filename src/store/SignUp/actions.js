import { SIGNUP_SUCCESSFUL, SIGNUP_IN_PROGRESS, SIGNUP_ERROR } from './types';
import auth from '../../api/auth';

export const signup = async ({ dispatch, userData }) => {
  try {
    dispatch({
      type: SIGNUP_IN_PROGRESS
    });
    const { token } = await auth.signup(userData);
    localStorage.setItem('token', token);
    dispatch({
      type: SIGNUP_SUCCESSFUL,
      payload: token
    });
  } catch (error) {
    dispatch({
      type: SIGNUP_ERROR,
      error
    });
  }
};
