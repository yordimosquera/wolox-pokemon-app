import React from 'react';
import PropTypes from 'prop-types';
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

Card.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  buttonText: PropTypes.string
};

export default Card;
