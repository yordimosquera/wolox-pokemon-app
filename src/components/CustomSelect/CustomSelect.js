import React from 'react';
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

export default CustomSelect;
