import React from 'react';
import { Link } from 'react-router-dom';
import './informationSection.css';  // Make sure to import the new CSS file

const InformationSection = () => {
  return (
    <div className="info-container">
      <h2 className="info-title">Information Section</h2>
      <div className="info-row">
        <div className="info-col">
          <div className="info-card Rectangle">
            <img src="https://via.placeholder.com/400x621" className="info-img" alt="Long Rectangle" />
            <div className="info-card-body">
              <Link to="/newssection" className="info-btn">Go to News</Link>
            </div>
          </div>
        </div>
        <div className="info-col2 ">
          <div className="info-card  Square">
            <img src="https://via.placeholder.com/300x300" className="info-img" alt="Square" />
            <div className="info-card-body">
              <Link to="/news" className="info-btn">Achievements</Link>
            </div>
          </div>
          <div className="info-card Square ">
            <img src="https://via.placeholder.com/300x300" className="info-img" alt="Square" />
            <div className="info-card-body">
              <Link to="/news" className="info-btn">Future Events</Link>
            </div>
          </div>
        </div>
        <div className="info-col ">
          <div className="info-card Rectangle ">
            <img src="https://via.placeholder.com/400x621" className="info-img" alt="Long Rectangle" />
            <div className="info-card-body">
              <Link to="/history" className="info-btn">History</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
