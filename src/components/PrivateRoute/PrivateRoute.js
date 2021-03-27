import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  secondaryPath,
  component: Component,
  condition = false,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      condition ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: secondaryPath, state: { from: props.location } }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  secondaryPath: PropTypes.string,
  component: PropTypes.node,
  condition: PropTypes.bool,
  location: PropTypes.string
};

export default PrivateRoute;
