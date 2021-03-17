import React from 'react';
import peopleLogo from '../../../../assets/images/Ic_ilustra_Hero@3x.png';
import './styles.scss';

const WelcomeSection = () => (
  <div className="welcome-section">
    <p className="welcome-text">
      <span>{'Bienvenido a tu'}</span>
      <span>
        <span className="bold">{'Entrevista Técnica'}</span>
        {' en'}
      </span>
      <span className="main">{'Wolox'}</span>
    </p>
    <img className="welcome-image" src={peopleLogo} />
  </div>
);

export default WelcomeSection;
