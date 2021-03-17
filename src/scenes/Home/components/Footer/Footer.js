import React from 'react';
import woloxLogo from '../../../../assets/images/Ic_Wolox_Footer.svg';
import Button from '../../../../components/Button';
import './styles.scss';

const Footer = () => (
  <div className="footer">
    <p className="footer-text">
      <span className="bold">
        {'Gracias por '}
        <span className="bold-lue">{'completar el ejercicio'}</span>
      </span>
      <span className="regular">{'Te invitamos a ver más información'}</span>
    </p>
    <Button buttonStyle="btn--primary">{'conocer más'}</Button>
    <img className="logo" src={woloxLogo} />
  </div>
);

export default Footer;
