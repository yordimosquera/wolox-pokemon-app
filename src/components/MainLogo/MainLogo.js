import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const MainLogo = ({ route, logo }) => (
  <Link to={route} className="main-logo">
    <img src={logo} className="image-logo" />
  </Link>
);

export default MainLogo;
