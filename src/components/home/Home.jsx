import React from 'react';
import './Home.css';
import dataAnalysis from '../../assets/Data-Analysis.png'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Upcoming Certifications</h1>
      <div className="upcoming-certification-container">
        <div className="analysis-container">
          <img id="analysis-img" src={dataAnalysis} />
          <div className="analysis-content">
            <p id="analysis-certificate-p">Certification | Attempt 1</p>

            <h3>Data Analysis Certification</h3>

            <p id="analysis-status-p">
              Completed&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;21 Mar 2022
            </p>
          </div>
        </div>
      </div>
      <h1>Continue Learning</h1>
      <div className="continue-learning-container"></div>
    </div>
  );
}

export default Home