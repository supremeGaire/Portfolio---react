import { useState } from 'react'
import './App.css'
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Career from './components/Career';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';

const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Career />
      <Portfolio />
      <ContactMe />
    </>
  )
}

export default App;
