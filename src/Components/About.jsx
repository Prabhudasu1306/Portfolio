import React from 'react';
import './About.css';
import Walpaper2 from './Walpaper2.jpg'; // ✅ Import Image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left Side - Image */}
        <div className="about-image">
          <img src={Walpaper2} alt="Prabhudasu Parusu" className="profile-image" />
        </div>

        {/* Right Side - Text Content */}
        <div className="about-text">
          <h1 className="highlight-name">Hello, I'm Prabhudasu Parusu.</h1>
          <p>
            I specialize in <strong>Data Analytics, Data Science, Machine Learning, Automation, and Software Development</strong>.
          </p>
          <p>
            I thrive on solving complex problems and turning data into meaningful insights. Passionate about
            <strong> AI, deep learning, automation, and full-stack development</strong>, I constantly explore
            innovative solutions to bridge technology with real-world challenges.
          </p>

          <h2 className="section-title">Education</h2>
          <ul className="education-list">
            <li>
              <strong>Master of Computer Applications (MCA)</strong> <br />
              JNTU, Kakinada | 2025
            </li>
            <li>
              <strong>Bachelor of Computer Science and Statistics</strong> <br />
              Acharya Nagarjuna University | 2023
            </li>
          </ul>

          <h2 className="section-title">Social Links</h2>
          <div className="social-links">
            <a href="https://github.com/Prabhudasu1306" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                alt="GitHub Profile" 
                className="icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/prabhudasu-parusu" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                alt="LinkedIn Profile" 
                className="icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
