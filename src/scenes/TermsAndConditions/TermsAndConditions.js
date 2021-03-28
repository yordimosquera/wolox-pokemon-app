import React from 'react';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import woloxerImage from '../../assets/images/img_woloxer.png';

const TermsAndConditions = () => (
  <>
    <BackgroundImage imageUrl={woloxerImage}>
      <p>{`We are working for you, ${' \n'} visit us soon... 🙈`}</p>
    </BackgroundImage>
  </>
);

export default TermsAndConditions;
