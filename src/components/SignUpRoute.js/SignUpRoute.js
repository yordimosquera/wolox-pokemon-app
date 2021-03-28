import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const SignUpRoute = ({ secondaryPath, component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        !token ? (
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

SignUpRoute.propTypes = {
  secondaryPath: PropTypes.string,
  component: PropTypes.node,
  location: PropTypes.string
};

export default SignUpRoute;
