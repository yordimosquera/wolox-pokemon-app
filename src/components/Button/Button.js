import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const STYLES = [
  'btn--primary',
  'btn--outline',
  'btn--outline--secondary',
  'btn--disabled'
];

const Button = ({
  children,
  onClick,
  buttonStyle,
  type = '',
  disabled = false
}) => {
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

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  buttonStyle: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
