import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Header from './Header';
import Footer from './Footer';
import Education from './Education';
import Certifications from './Certifications';
import './NavbarCom.css';
import Rewards from './Rewards';

const NavbarCom = () => {
  const [darkMode, setDarkMode] = useState(true); // Default is dark-mode

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Header />
      <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
        <div className="logo">Prabhudasu Parusu</div>
        <div className="navLinks">
          <NavLink to="/about" className="link">About</NavLink>
          <NavLink to="/contact" className="link">Contact</NavLink>
          <NavLink to="/projects" className="link">Projects</NavLink>
          <NavLink to="/skills" className="link">Skills</NavLink>
          <NavLink to="/education" className="link">Education</NavLink>
          <NavLink to="/certifications" className="link">Certifications</NavLink>
          <NavLink to="/rewards" className="link">Rewards</NavLink>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default NavbarCom;
