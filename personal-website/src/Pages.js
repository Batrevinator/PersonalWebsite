import React from 'react';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';

function Pages() {
  return (
    <React.StrictMode>
      <HomePage/>
      <AboutMe/>
      <Experience/>
      <Education/>
    </React.StrictMode>
  );
}

export default Pages;
