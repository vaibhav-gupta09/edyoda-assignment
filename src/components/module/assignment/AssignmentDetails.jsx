import React from 'react'
import clock from '../../../assets/clock-blue.svg';
import calendar from '../../../assets/calendar.svg';

const AssignmentDetails = () => {
  return (
    <div className="assignment-details-wrapper">
      <h4 id="assignment-details-h4">Assignment Details</h4>
      <div className="assignment-details-container">
        <div>
          <h1>3</h1>
          <p>problems</p>
        </div>
        <div>
          <h1>100</h1>
          <p>Total Score</p>
        </div>
        <div>
          <h4>start</h4>
          <div className="calender-container">
            <img src={calendar} />
            <p>20 December 2023</p>
          </div>
          <div className="clock-container">
            <img src={clock} />
            <p>07:30 PM</p>
          </div>
        </div>
        <div>
          <h4>Due</h4>
          <div className="calender-container">
            <img src={calendar} />
            <p>26 December 2023</p>
          </div>
          <div className="clock-container">
            <img src={clock} />
            <p>11:59 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentDetails