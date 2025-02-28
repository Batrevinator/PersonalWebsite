import React from 'react';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';

function Pages() {
  return (
    <React.StrictMode>
      <HomePage/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Education/>
    </React.StrictMode>
  );
}

export default Pages;
