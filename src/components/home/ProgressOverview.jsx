import React from 'react'

const ProgressOverview = () => {
  return (
    <div className="progress-overview-container">
      <h3>Progress Overview</h3>
      <div className="grade-container">
        <p style={{ fontSize: "1.5rem" }}>0%</p>
        <p style={{ color: "gray", verticallyAlign: "bottom" }}>
          Overall Grade
        </p>
      </div>
      <div className="attendance-container">
        <p style={{ fontSize: "1.5rem" }}>0%</p>
        <p style={{ color: "gray", verticallyAlign: "bottom" }}>
          Overall Attendance
        </p>
      </div>
      <p style={{color: '#1C97FF', fontSize:'10px'}}>
        <b>VIEW DETAILED PROGRESS</b>
         </p>
    </div>
  );
}

export default ProgressOverview