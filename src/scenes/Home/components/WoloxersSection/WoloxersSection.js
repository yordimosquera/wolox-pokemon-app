import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button';
import twitterLogo from '../../../../assets/images/twitter.svg';
import './styles.scss';

const WoloxersSection = () => (
  <div className="woloxers-section">
    <div className="woloxer-image">
      <p>
        <span className="green-text">{'350 + '}</span>
        <span className="blue-text">{'Wolox'}</span>
      </p>
      <p className="container-twitter">
        <img alt="twitter logo" className="twitter-logo" src={twitterLogo} />
        <span>{'@wolox'}</span>
      </p>
      <Link to="/twitter" target="_blank">
        <Button buttonStyle="btn--outline--secondary">{'Siguenos'}</Button>
      </Link>
    </div>
    <div className="work-for">
      <p className="woloxer-text">
        <span>{'Trabajamos para'}</span>
        <span>
          <span className="blue-text">{'convertir '}</span>
          <span className="green-text">{'ideas '}</span>
          {'en'}
        </span>
        <span>{'productos.'}</span>
      </p>
    </div>
  </div>
);

export default WoloxersSection;
