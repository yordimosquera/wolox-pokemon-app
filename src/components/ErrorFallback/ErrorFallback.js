import React from 'react';
import PropTypes from 'prop-types';

const ErrorFallBack = ({ error, resetErrorBoundary = () => {} }) => (
  <div role="alert">
    <p>{'Something went wrong:'}</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>{'Try again'}</button>
  </div>
);

ErrorFallBack.propTypes = {
  error: PropTypes.object,
  resetErrorBoundary: PropTypes.func
};

export default ErrorFallBack;
