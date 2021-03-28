import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const BackgroundImage = ({ imageUrl, children }) => (
  <div
    className="background-image"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    {children}
  </div>
);

BackgroundImage.propTypes = {
  imageUrl: PropTypes.string,
  children: PropTypes.node
};

export default BackgroundImage;
