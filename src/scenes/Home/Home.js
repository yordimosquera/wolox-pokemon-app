import React from 'react';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import RequirementsSeciton from './components/RequirementsSection';
import TechsSection from './components/TechsSection/TechsSection';
import WelcomeSection from './components/WelcomeSection';
import WoloxersSection from './components/WoloxersSection';
import BenefitsSection from './components/BenefitsSection';

const Home = ({ history }) => {
  return (
    <>
      <Navbar history={history} />
      <WelcomeSection />
      <TechsSection />
      <WoloxersSection />
      <RequirementsSeciton />
      <BenefitsSection />
      <Footer />
    </>
  );
};

export default Home;
