import React from 'react';
import techLogo from '../../../../assets/images/Ic_Tecnologys.svg';
import './styles.scss';

const TechsSection = () => (
  <div id="technologies" className="tech-section">
    <p className="tech-text">
      <span>{'Estamos buscando'}</span>
      <span>{'para incorporar gente'}</span>
      <span>{'increíble para estas'}</span>
      <span>{'tecnologías:'}</span>
    </p>
    <img className="tech-image" src={techLogo} />
  </div>
);

export default TechsSection;
