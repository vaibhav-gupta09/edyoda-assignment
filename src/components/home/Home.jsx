import React from 'react';
import './Home.css';
import dataAnalysis from '../../assets/Data-Analysis.png'

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h1>Upcoming Certifications</h1>
        <div className="upcoming-certification-container">
          <div className="analysis-container">
            <img id="analysis-img" src={dataAnalysis} />
            <div className="analysis-content">
              <p id="analysis-certificate-p">
                Certification &nbsp;|&nbsp; Attempt 1
              </p>

              <h3>Data Analysis Certification</h3>

              <p id="analysis-status-p">
                Completed&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;21 Mar 2022
              </p>
            </div>
            <div className="exam-structure-container">
              <p> Exam Structure </p>
              <div className="round1-container">
                <p>Round 1 &nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p className="exam-structure-active-p">MCQs</p>
                <p className="exam-structure-active-p"> Coding</p>
              </div>
              <div className="round2-container">
                <p>Round 2&nbsp;&nbsp;&nbsp;&nbsp; </p>
                <p className="exam-structure-active-p">Project</p>
              </div>
            </div>

            <div className="exam-detail-btn">
              <button>View Exam Details</button>
            </div>
          </div>
        </div>
        <h1>Continue Learning</h1>
        <div className="continue-learning-container"></div>
      </div>
    </div>
  );
}

export default Home