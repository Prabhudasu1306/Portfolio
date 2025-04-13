import React from 'react';
import './About.css';
import Walpaper2 from './Walpaper2.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left Side - Image */}
        <div className="about-image">
          <img src={Walpaper2} alt="Prabhudasu Parusu" className="profile-image" />
        </div>

        {/* Right Side - Text */}
        <div className="about-text">
          <h1 className="highlight-name">Hi, I'm Prabhudasu Parusu</h1>
          <p className="about-intro">
            I'm an aspiring AI Developer with a deep interest in <strong>Machine Learning, Deep Learning, NLP, LLMs, and Computer Vision</strong>. I enjoy solving complex problems using data and intelligent systems.
          </p>
          <p className="about-details">
            My focus lies in building scalable AI solutions and real-time applications using modern tools like <strong>Azure Databricks, Big Data pipelines, Spark, and cloud-based platforms</strong>.
            I'm passionate about bridging the gap between raw data and impactful products.
          </p>
          <p className="about-details">
            I believe in continuous learning, collaboration, and staying up-to-date with emerging tech like <strong>Generative AI, Transformers, and multi-modal systems</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
