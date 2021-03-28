import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ErrorText = ({ message = '' }) => {
  return <p className="error-text">{message}</p>;
};

ErrorText.propTypes = {
  message: PropTypes.string
};
export default ErrorText;
