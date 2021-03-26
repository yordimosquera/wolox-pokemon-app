import React from 'react';
import Button from '../Button';
import './styles.scss';

const Card = ({ image, text, buttonText, onClick }) => (
  <div className="card">
    <img src={image} className="card-image" />
    <div className="card-description">
      <p className="card-text">{text}</p>
      <Button onClick={onClick} buttonStyle="btn--outline">
        {buttonText}
      </Button>
    </div>
  </div>
);

export default Card;
