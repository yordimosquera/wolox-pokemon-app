import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import RequirementsSeciton from './components/RequirementsSection';
import WelcomeSection from './components/WelcomeSection';

const Home = () => {
  return (
    <>
      <Navbar />
      <WelcomeSection />
      <RequirementsSeciton />
      <Footer />
    </>
  );
};

export default Home;
