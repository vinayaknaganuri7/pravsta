import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Pravstaabout from './components/Pravstaabout'; // ✅ Corrected path

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Pravstaabout" element={<Pravstaabout />} /> {/* ✅ Corrected component */}
      </Routes>
    </Router>
  );
};

export default App;
