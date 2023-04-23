import React from 'react'

const AssignmentHeader = () => {
  return (
    <div className="assignment-header">
      <div>
        <h3>Assignmet-1: operators | Loops</h3>
        <p>20 December 2023</p>
      </div>
      <div className="problem-score-container">
        <div>
          <h4>3</h4>
          <p>problems</p>
        </div>
        <div>
          <h4>100</h4>
          <p>Total Score</p>
        </div>
      </div>
    </div>
  );
}

export default AssignmentHeader