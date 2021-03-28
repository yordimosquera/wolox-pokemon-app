import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import SignUpContext from '../../store/SignUp/context';

const PrivateRoute = ({ secondaryPath, component: Component, ...rest }) => {
  const signUpContext = useContext(SignUpContext);
  const { token } = signUpContext;
  const localToken = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        localToken || token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: secondaryPath, state: { from: props.location } }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  secondaryPath: PropTypes.string,
  component: PropTypes.node,
  location: PropTypes.string
};

export default PrivateRoute;
