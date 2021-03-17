import React from 'react';

import Requirement from '../../../../components/ListText/ListText';
import bullet3 from '../../../../assets/images/Ic_Bullet_3.svg';
import bullet2 from '../../../../assets/images/Ic_Bullet_2.svg';
import bullet1 from '../../../../assets/images/Ic_Bullet_1.svg';

import './styles.scss';

const RequirementsSeciton = () => (
  <div id="requirements" className="requirements-section">
    <p className="requirement-element">{'Requerimientos'}</p>
    <div className="requirements-container">
      <Requirement
        imageSource={bullet1}
        text={
          'Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos.'
        }
      />
      <Requirement imageSource={bullet2} text={'Inglés intermedio/avanzado'} />
      <Requirement
        imageSource={bullet3}
        text={'Conocimiento en metodologías ágiles (deseable)'}
      />
    </div>
  </div>
);

export default RequirementsSeciton;
