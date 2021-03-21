import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import Button from '../../../../components/Button/';
import './styles.scss';

const Navbar = () => {
  const sections = [
    { name: 'Inicio' },
    { name: 'Tecnologías' },
    { name: 'Beneficios' },
    { name: 'Requerimientos' }
  ];
  const [isMenuDisplayed, setIsMenuDispalyed] = useState(false);
  const [isWindowWidthReduced, setIsWindowWidthReduced] = useState(true);

  const handleClick = () => setIsMenuDispalyed(!isMenuDisplayed);
  const closeMobileMenu = () => setIsMenuDispalyed(false);

  const showButton = () => {
    if (window.innerWidth >= 985) {
      setIsWindowWidthReduced(false);
    } else {
      setIsWindowWidthReduced(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <p>Wolox</p>
        <ul className={isMenuDisplayed ? 'nav-menu active' : 'nav-menu'}>
          {sections.map((section, index) => (
            <li key={index}>
              <a href="" className="nav-links">
                {section.name}
              </a>
            </li>
          ))}
        </ul>
        {isWindowWidthReduced ? (
          isMenuDisplayed ? (
            <FaTimes
              className="nav-menu-icon"
              onClick={() => closeMobileMenu()}
            />
          ) : (
            <BiMenu className="nav-menu-icon" onClick={() => handleClick()} />
          )
        ) : (
          <Link to={'/sign-up'}>
            <Button buttonStyle="btn--outline">{'Registro'}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
