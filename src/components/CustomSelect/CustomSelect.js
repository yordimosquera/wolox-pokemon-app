import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CustomSelect = ({ options, handleChange }) => (
  <select className="custom-select" name="select" onChange={handleChange}>
    {options.map((option, index) => (
      <option key={index} {...option}>
        {option.value}
      </option>
    ))}
  </select>
);

CustomSelect.propTypes = {
  options: PropTypes.array,
  handleChange: PropTypes.func
};

export default CustomSelect;
