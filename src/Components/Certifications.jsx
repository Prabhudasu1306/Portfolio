import React from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "Full Stack Data Science & AI",
    provider: "NASSCOM",
    details: [
      "Learned ML and Deep Learning fundamentals.",
      "Built AI models for real-world applications.",
      "Worked with TensorFlow and Scikit-Learn.",
      "Implemented NLP and Computer Vision projects.",
      "Explored Big Data and Data Engineering concepts.",
    ],
  },
  {
    title: "Python for Data Science",
    provider: "IBM",
    details: [
      "Mastered data analysis using Pandas.",
      "Gained expertise in data visualization (Matplotlib, Seaborn).",
      "Worked on real-world datasets for insights.",
      "Learned NumPy for numerical computing.",
      "Explored machine learning fundamentals with Python.",
    ],
  },
  {
    title: "Data Analytics",
    provider: "Cisco",
    details: [
      "Analyzed business data for decision-making.",
      "Worked with SQL databases for data extraction.",
      "Visualized data using Tableau and Power BI.",
      "Explored statistical analysis and hypothesis testing.",
      "Learned about predictive analytics techniques.",
    ],
  },
  {
    title: "Programming in Python",
    provider: "NPTEL",
    details: [
      "Covered Python fundamentals and syntax.",
      "Implemented object-oriented programming concepts.",
      "Worked on file handling and exception handling.",
      "Explored data structures like lists, tuples, and dictionaries.",
      "Developed small automation scripts using Python.",
    ],
  },
  {
    title: "Developing Soft Skills & Personality",
    provider: "NPTEL",
    details: [
      "Improved verbal and non-verbal communication.",
      "Developed leadership and teamwork skills.",
      "Learned effective time management techniques.",
      "Gained insights into emotional intelligence.",
      "Enhanced problem-solving and critical thinking abilities.",
    ],
  },
];

const Certifications = () => {
  return (
    <div className="certifications-container">
      {certifications.map((cert, index) => (
        <div key={index} className="cert-card">
          <h3>{cert.title}</h3>
          <p className="provider">{cert.provider}</p>
          <div className="cert-details">
            <ul>
              {cert.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
