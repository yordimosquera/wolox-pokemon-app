import React from 'react';
import './styles.scss';

const InputText = ({ type = 'text', children, ...rest }) => {
  return (
    <div class="input-text">
      <label>
        <input type={type} {...rest} />
        {children}
      </label>
    </div>
  );
};

export default InputText;
