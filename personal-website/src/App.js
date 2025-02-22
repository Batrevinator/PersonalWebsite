import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CustomNav from './CustomNav';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Pages from './Pages';

function App() {
  return (
    <BrowserRouter>
      <CustomNav/>
      <Pages/>
    </BrowserRouter>
  );
}

export default App;
