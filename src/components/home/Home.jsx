import React from 'react';
import './Home.css';

import UpcomingCertification from './UpcomingCertification';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h1>Upcoming Certifications</h1>
        <div className="upcoming-certification-container">
           <UpcomingCertification/>
        </div>
        <h1>Continue Learning</h1>
        <div className="continue-learning-container"></div>
      </div>
    </div>
  );
}

export default Home