import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
// import Course from './components/Course';
const App = () => {
  return (
  <BrowserRouter>
      
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route index element={<Home />} /> */}
          // <Route path="/courses" element={<Course/>} />
        {/* </Route> */}
      </Routes>
      <Footer/>
    </div>
  </BrowserRouter>
  );
};

export default App;
