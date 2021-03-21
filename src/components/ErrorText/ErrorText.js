import React from 'react';
import './styles.scss';

const ErrorText = ({ message = '' }) => {
  return <p className="error-text">{message}</p>;
};

export default ErrorText;
