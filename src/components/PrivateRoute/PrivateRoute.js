import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  secondaryPath,
  component: Component,
  condition,
  ...rest
}) => (
  console.log({ ...rest }),
  (
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
  )
);

export default PrivateRoute;
