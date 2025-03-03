import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Prabhudasu Parusu. All Rights Reserved.</p>
      
      <div className="social-links">
        <a href="https://github.com/Prabhudasu1306" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/prabhudasu-parusu/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="icon" />
        </a>
        <a href="https://github.com/Prabhudasu1306" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/prabhudasu-parusu/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" className="icon" />
        </a>
        <a href="https://github.com/Prabhudasu1306" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
