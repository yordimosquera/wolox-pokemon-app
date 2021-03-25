import React, { useContext } from 'react';
import SignUp from './SignUp';
import CountriesContext from '../../store/Countries/context';
import SignUpContext from '../../store/SignUp/context';

const SignUpContainer = ({ ...rest }) => {
  const countriesContext = useContext(CountriesContext);
  const signUpContext = useContext(SignUpContext);
  const { userSignUp } = signUpContext;
  const { getCountries, countries } = countriesContext;

  return (
    <SignUp
      countries={countries}
      getCountries={getCountries}
      userSignUp={userSignUp}
      {...rest}
    />
  );
};

export default SignUpContainer;
