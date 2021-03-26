import React from 'react';
import './styles.scss';

const Benefit = ({ image, text }) => (
  <div className="benefit">
    <img alt={text} src={image} />
    <p>{text}</p>
  </div>
);

export default Benefit;
