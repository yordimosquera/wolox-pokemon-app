import React from 'react';
import './styles.scss';

const BackgroundImage = ({ imageUrl, children }) => (
  <div
    className="background-image"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    {children}
  </div>
);

export default BackgroundImage;
