import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Requirement = ({ imageSource, text }) => {
  return (
    <div className="list-text">
      <img alt={text} src={imageSource} />
      <p>{text}</p>
    </div>
  );
};

Requirement.propTypes = {
  imageSource: PropTypes.string,
  text: PropTypes.string
};

export default Requirement;
