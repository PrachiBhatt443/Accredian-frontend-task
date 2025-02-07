import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Footer/>
    </div>
  );
};

export default App;
