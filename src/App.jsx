import { useState } from 'react'
import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Career from './components/Career';
import Portfolio from './components/Portfolio';
import Designs from './components/Designs';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Career />
      <Portfolio />
      <Designs />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App;
