import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="relative text-neutral-200 min-h-screen">
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-[-1]"></div>
      
      {/* Content */}
      <Navbar />
      <Hero />
      <About />
      <Technologies/>
      <Experience/>
      <Projects/>
    </div>
  );
};

export default App;
