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
    </>
  )
}

export default App;
