import React from 'react';
import './styles.scss';

const STYLES = [
  'btn--primary',
  'btn--outline',
  'btn--outline--secondary',
  'btn--disabled'
];

const Button = ({ children, onClick, buttonStyle, type = '', disabled }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  return (
    <button
      className={`btn ${checkButtonStyle}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
