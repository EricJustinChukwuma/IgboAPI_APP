import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Banner from '../Components/Banner';
import API from '../Components/API';
import Features from '../Components/Features';
import Docs from '../Components/Docs';
import Statistics from '../Components/Statistics';
import Members from '../Components/Members';
import Footer from '../Components/Footer';

const Homepage = () => {
  return (
    <>
        <Nav />
        <Banner />
        <API />
        <Features />
        <Docs />
        <Statistics />
        <Members />
        <Footer />
    </>
  )
}

export default Homepage