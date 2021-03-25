import React from 'react';
import './styles.scss';

const CheckBox = ({ children, onChange }) => (
  <div className="checkbox">
    <input type={'checkbox'} onChange={onChange} />
    {children}
  </div>
);

export default CheckBox;
