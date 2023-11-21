import React, { useState } from 'react';
import Nav from '../Components/Nav';
import AboutBanner from '../Components/AboutBanner';
import AboutGoals from '../Components/AboutGoals';
import AboutBottomBanner from '../Components/AboutBottomBanner';
import Footer from "../Components/Footer";


const AboutPage = () => {
  return (
    <>
      <Nav />
      <AboutBanner />
      <AboutGoals />
      <AboutBottomBanner />
      <Footer />
    </>
  )
}

export default AboutPage;