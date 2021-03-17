import React from 'react';
import './styles.scss';

const STYLES = ['btn--primary', 'btn--outline', 'btn--outline--secondary'];

const Button = ({ children, onClick, buttonStyle }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <button className={`btn ${checkButtonStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
