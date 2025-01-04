import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Cv from './components/Cv';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      {/* <Cv /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  )
}

export default App
