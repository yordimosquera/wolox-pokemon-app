import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import RequirementsSeciton from './components/RequirementsSection';
import TechsSection from './components/TechsSection/TechsSection';
import WelcomeSection from './components/WelcomeSection';
import WoloxersSection from './components/WoloxersSection';

const Home = () => {
  return (
    <>
      <Navbar />
      <WelcomeSection />
      <TechsSection />
      <WoloxersSection />
      <RequirementsSeciton />
      <Footer />
    </>
  );
};

export default Home;
