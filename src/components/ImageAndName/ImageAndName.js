import React from 'react';
import './styles.scss';

const ImageAndName = ({ imageSource, text }) => (
  <div className="image-text">
    <img alt={text} src={imageSource}>
      <p>{text}</p>
    </img>
  </div>
);

export default ImageAndName;
