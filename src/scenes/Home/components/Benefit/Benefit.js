import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Benefit = ({ image, text }) => (
  <div className="benefit">
    <img alt={text} src={image} />
    <p>{text}</p>
  </div>
);

Benefit.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string
};

export default Benefit;
