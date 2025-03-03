import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Advertising Sales Forecasting',
    tools: 'Python, Scikit-Learn, Pandas, Flask, Power BI',
    aim: 'Develop a market analysis tool using ML techniques to forecast advertising sales.',
    responsibilities: [
      'Developed a Polynomial Regression model for sales prediction.',
      'Preprocessed data using Pandas for better accuracy.',
      'Built a Flask web interface for real-time budget input.',
      'Stored the trained model using Pickle for future predictions.',
      'Achieved a 98% R² score, ensuring high predictive power.',
    ],
  },
  {
    title: 'Real-Time Face & Eye Detection',
    tools: 'Python, Flask, OpenCV',
    aim: 'Implement a real-time face and eye detection web app using OpenCV.',
    responsibilities: [
      'Developed a Flask web application for real-time face and eye detection.',
      'Integrated OpenCV and Haar Cascade for accurate feature detection.',
      'Implemented video capture functionality for real-time processing.',
      'Designed a user-friendly interface to display the video feed.',
      'Optimized detection performance for fast and accurate processing.',
    ],
  },
  {
    title: 'Restaurant Name & Menu Generator',
    tools: 'Python, Streamlit, Hugging Face API, LangChain',
    aim: 'Create an AI-powered restaurant name and menu generator.',
    responsibilities: [
      'Developed a Streamlit app integrating Hugging Face BLOOM.',
      'Implemented LangChain for effective prompt engineering.',
      'Designed an interactive UI with real-time response generation.',
      'Enabled users to generate restaurant names and menus based on cuisine.',
      'Ensured smooth API integration with Hugging Face Hub.',
    ],
  },
  {
    title: 'Image Classification Model',
    tools: 'TensorFlow, Keras, Flask, OpenCV',
    aim: 'Build a CNN-based image classification model.',
    responsibilities: [
      'Developed and trained a deep learning model using CNN.',
      'Preprocessed image data using OpenCV.',
      'Integrated Flask for deploying the model as a web application.',
      'Enhanced accuracy through data augmentation techniques.',
      'Tested and optimized the model for real-world scenarios.',
    ],
  },
  {
    title: 'Spam Email Classifier',
    tools: 'Python, Scikit-Learn, Flask',
    aim: 'Develop an NLP-based spam detection model.',
    responsibilities: [
      'Implemented a Naive Bayes classification model for spam detection.',
      'Performed text preprocessing using NLP techniques.',
      'Integrated Flask to allow users to check email classifications.',
      'Tested the model with various datasets to improve accuracy.',
      'Optimized the feature selection process for better predictions.',
    ],
  },
  {
    title: 'Product Tracking & Servicing',
    tools: 'React.js, Spring Boot, SQL',
    aim: 'Develop a full-stack application for tracking products and servicing.',
    responsibilities: [
      'Developed a web app with roles like Customer, GlobalAdmin, and StoreAdmin.',
      'Implemented CRUD operations for product and service management.',
      'Designed the UI using React.js and Bootstrap.',
      'Developed backend APIs using Spring Boot.',
      'Managed authentication and role-based access control.',
      'Participated in sprint planning, reviews, and bug fixes.',
    ],
  },
  {
    title: 'University Management System',
    tools: 'React.js, Spring Boot, MySQL',
    aim: 'Develop a system to manage students, courses, and faculty.',
    responsibilities: [
      'Built REST APIs for managing users and courses using Spring Boot.',
      'Designed the front-end with React.js and Bootstrap.',
      'Implemented user authentication and role-based access control.',
      'Integrated MySQL for efficient data management.',
      'Developed placement training and program support features.',
    ],
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {hoveredProject === index ? (
              <div className="hover-info">
                <h2 className="project-title">{project.title}</h2>
                <p><span className="highlight">Aim:</span> {project.aim}</p>
                <ul>
                  {project.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="default-info">
                <h2>{project.title}</h2>
                <p><strong>Tools Used:</strong> {project.tools}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
