import React from 'react'
import moduleImg from '../../assets/Data Wrangling.png';
import SchoolIcon from "@mui/icons-material/School";
const ModuleDetails = () => {
  return (
    <div className="module-detail-container">
      <div className="data-wrangling-wrapper">
        <div className="data-wrangling-container">
          <img src={moduleImg} />
          <div className="data-wrangling-header">
            <p>DATA WRANGLING & VISUALIZATION</p>
            <div className="instructor-container">
              <SchoolIcon />
              <p style={{ color: "#1C97FF", marginLeft:'10px' }}>Test Instructor</p>
            </div>
          </div>
        </div>
        <div>
          <div className="module-detail">
            <p style={{ marginRight: "1rem" }}>Live Session</p>
            <p
              style={{
                width: "8rem",
                borderBottom: "8px solid #A9E0FF",
                borderRadius: "3px",
                color: "#A9E0FF",
              }}
            >
              0/13
            </p>
          </div>
          <div className="module-detail">
            <p style={{ marginRight: "1rem" }}>Assignments</p>
            <p
              style={{
                width: "8rem",
                borderBottom: "8px solid #A9E0FF",
                borderRadius: "3px",
                color: "#A9E0FF",
              }}
            >
              0/3
            </p>
          </div>
          <div className="module-detail">
            <p style={{ marginRight: "1rem" }}>MCQ Quiz</p>
            <p
              style={{
                width: "8rem",
                borderBottom: "8px solid #A9E0FF",
                borderRadius: "3px",
                color: "#A9E0FF",
              }}
            >
              0/6
            </p>
          </div>
        </div>
      </div>
      <div className="today-plan-container">
        <h3>Today's Plan</h3>
        <p style={{ fontSize: "10px", color: "gray" }}>21 March 2023</p>
        <br />
        <p
          style={{ fontSize: "1.2rem", color: "#008BFF", marginBottom: "1rem" }}
        >
          Data Transformation using Pandas - 3
        </p>
        <div style={{ display: "flex", marginBottom: "0.5rem" }}>
          <p style={{ color: "gray", marginRight: "5rem" }}>Daily Feedback</p>
          <p style={{ fontSize: "0.8rem", color: "#008BFF" }}>
            Opens at 07:30 PM
          </p>
        </div>
        <button className="live-session-btn">JOIN LIVE SESSION</button>
        <p style={{ fontSize: "0.8rem", color: "gray" }}>BEGINS AT 07:30 PM</p>
      </div>
    </div>
  );
}

export default ModuleDetails