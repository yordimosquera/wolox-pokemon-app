import React from 'react';
import Benefit from '../Benefit/Benefit';
import hourBenefitImage from '../../../../assets/images/Ic_Hour.svg';
import homeOfficeImage from '../../../../assets/images/Ic_HomeOffice.svg';
import workshopsImage from '../../../../assets/images/Ic_Workshops.svg';
import snacksImage from '../../../../assets/images/Ic_DrinkSnacks.svg';
import laptopImage from '../../../../assets/images/Ic_laptop.svg';
import brainImage from '../../../../assets/images/Ic_brain.svg';

import './styles.scss';

const BenefitsSection = () => (
  <div id="benefits" className="benefits">
    <p className="benefits-title">
      {'Entre los beneficios que ofrecemos se encuentran'}
      <span>{';)'}</span>
    </p>
    <div className="benefits-container">
      <Benefit image={hourBenefitImage} text={'Flexibilidad Horaria'} />
      <Benefit image={homeOfficeImage} text={'Home office'} />
      <Benefit image={workshopsImage} text={'Capacitaciones y workshops'} />
      <Benefit image={snacksImage} text={'Snacks, frutas y bebidas gratis'} />
      <Benefit image={laptopImage} text={'Semana remota'} />
      <Benefit image={brainImage} text={'Trabajar en ultimas tecnologías'} />
    </div>
    <div className="divider" />
  </div>
);

export default BenefitsSection;
