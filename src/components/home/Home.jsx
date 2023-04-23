import React from 'react';
import './Home.css';

import UpcomingCertification from './UpcomingCertification';
import ModuleDetails from './ModuleDetails';
import ProgressOverview from './ProgressOverview';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h1>Upcoming Certifications</h1>
        <div className="upcoming-certification-container">
          <UpcomingCertification />
        </div>
        <h1>Continue Learning</h1>
        <div className="continue-learning-wrapper">
          <p style={{ color: "#008BFF", textAlign: "center" }}>
            <b>VIEW MODULE DETAILS</b>
          </p>
          <div className="continue-learning-container">
            <ModuleDetails />
            <ProgressOverview/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home