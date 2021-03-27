import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CheckBox = ({ children, onChange }) => (
  <div className="checkbox">
    <input type={'checkbox'} onChange={onChange} />
    {children}
  </div>
);

CheckBox.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func
};

export default CheckBox;
