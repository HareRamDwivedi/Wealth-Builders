import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './common/Navbar';
import Footer from './common/Footer';

// Page Components
import Home from './Pages/Home/Home';
import Services from './Pages/services/Services';
import Contact from './Pages/contactus/Contactus';
import Testimonial from './Pages/testimonial/Testimonial';
import SipCalc from './Pages/sipCalc/sipCalc'; 
import ServicesPage from './Pages/services/ServicesPage';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <Navbar />

      {/* Scroll handler for #aboutus, #contact, etc. */}
      <ScrollToHashElement />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sip-calculator" element={<SipCalc />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* Removed /#aboutus – it's now part of / with scroll */}
        {/* <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
