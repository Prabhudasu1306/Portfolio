import React from 'react';
import './Rewards.css';

const Rewards = () => {
  return (
    <div className="rewards-container">
      <h2 className="rewards-title">Achievements & Rewards</h2>
      <ul className="rewards-list">
        <li>🏅 Top 3% percentile on Kaggle in Data Science competitions</li>
        <li>🤝 Volunteered as a mentor for underprivileged students in coding bootcamps</li>
        <li>🎓 Completed NASSCOM Certified Full Stack Data Science and AI course</li>
        
        <li>📢 Presented AI project on lung cancer prediction at college tech fest</li>
      </ul>
    </div>
  );
};

export default Rewards;
