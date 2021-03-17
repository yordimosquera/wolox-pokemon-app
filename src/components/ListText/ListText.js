import React from 'react';
import './styles.scss';

const Requirement = ({ imageSource, text }) => {
  return (
    <div className="list-text">
      <img alt={text} src={imageSource} />
      <p>{text}</p>
    </div>
  );
};

export default Requirement;
