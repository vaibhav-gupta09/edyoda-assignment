import React from 'react'
import clock from "../../../assets/clock-blue.svg";
import calendar from "../../../assets/calendar.svg";

const QuizDetails = () => {
  return (
    <div className="quiz-details-wrapper">
      <h4 id="quiz-details-h4">Quiz Details</h4>
      <div className="quiz-details-container">
        <div>
          <h1>10</h1>
          <p>problems</p>
        </div>
        <div>
          <h1>-</h1>
          <p>Duration</p>
        </div>
        <div>
          <h1>120</h1>
          <p>Total Score</p>
        </div>
        <div>
          <h4>start</h4>
          <div className="calender-container">
            <img src={calendar} />
            <p>16 December 2023</p>
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
            <p>19 December 2023</p>
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

export default QuizDetails