import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const SIZES = ['big-logo', 'regular-logo'];

const MainLogo = ({ route, logo, size }) => {
  const checkButtonStyle = SIZES.includes(size) ? size : SIZES[0];

  return (
    <Link to={route} className={checkButtonStyle}>
      <img src={logo} />
    </Link>
  );
};

MainLogo.propTypes = {
  route: PropTypes.string,
  logo: PropTypes.string,
  size: PropTypes.string
};

export default MainLogo;
