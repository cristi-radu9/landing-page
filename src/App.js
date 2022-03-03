import './App.css';
import { useState } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import MenuBars from './Components/MenuBars/MenuBars';
import About from './Components/About/About'
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {

  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      <MenuBars
        showNav={showNav}
        setShowNav={setShowNav}
      />
      <Navigation
        showNav={showNav}
        setShowNav={setShowNav}
      />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
