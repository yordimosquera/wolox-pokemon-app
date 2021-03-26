import React from 'react';
import './styles.scss';

const ElementList = ({ name, buttonText, onClick }) => (
  <div className="element">
    <p className="element-name">{name}</p>
    <button className="element-button" onClick={onClick}>
      {buttonText}
    </button>
  </div>
);

export default ElementList;
