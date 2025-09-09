import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CustomNav from './CustomNav';
import Pages from './Pages';
import Experience from './Experience';
import Vistara from './ProjectAbouts/Vistara';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Education from './Education';

function App() {
  return (
    <BrowserRouter>
      <CustomNav/>
      <Routes>
        <Route exact path = "/" element = {<HomePage/>}/>
        <Route exact path = "/vistara" element = {<Vistara/>}/>
        <Route exact path = "/about-me" element = {<AboutMe/>}/>
        <Route exact path = "/projects" element = {<Projects/>}/>
        <Route exact path = "/education" element = {<Education/>}/>
        <Route exact path = "/experience" element = {<Experience/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
