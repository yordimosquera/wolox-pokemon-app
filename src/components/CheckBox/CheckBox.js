import React from 'react';
import './styles.scss';

const CheckBox = ({ children, onChange }) => (
  <label className="checkbox">
    <input type={'checkbox'} onChange={onChange} />
    {children}
  </label>
);

export default CheckBox;
