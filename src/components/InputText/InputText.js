import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputText = ({ type = 'text', children, ...rest }) => {
  return (
    <div className="input-text">
      <label>
        <input type={type} {...rest} />
        {children}
      </label>
    </div>
  );
};

InputText.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node
};

export default InputText;
