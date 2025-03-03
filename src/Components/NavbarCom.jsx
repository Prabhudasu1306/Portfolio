import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Header from './Header';
import Footer from './Footer';
import './NavbarCom.css';
import Education from './Education';
import Certifications from './Certifications';

const NavbarCom = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
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
          <NavLink to="/certifications" className="link">Certifications</NavLink> {/* Fixed the link */}
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
        <Route path="/certifications" element={<Certifications />} /> {/* Fixed the route */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default NavbarCom;
