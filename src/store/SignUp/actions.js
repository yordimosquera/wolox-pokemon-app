import { SIGNUP_SUCCESSFUL, SIGNUP_IN_PROGRESS, SIGNUP_ERROR } from './types';
import auth from '../../api/auth';

export const signUp = async ({ dispatch, userData, countries }) => {
  try {
    dispatch({
      type: SIGNUP_IN_PROGRESS
    });
    const { name, last_name, country, phone, password, mail } = userData;
    const { capital } = countries.find(item => item.name === country);
    const { token } = await auth.signup({
      name,
      last_name,
      country,
      province: capital,
      phone,
      password,
      mail
    });
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
