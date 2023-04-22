import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import './ModuleSlider.css'
import activeTopicImg from "../../../assets/activeTopic.svg";
import activeQuizImg from "../../../assets/activeModuleQuiz.svg";
import activeAssignmentImg from "../../../assets/activeAssignment.svg";
import inActiveTopicImg from "../../../assets/topic.svg";
import inActiveQuizImg from "../../../assets/moduleQuiz.svg";
import inActiveAssignmentImg from "../../../assets/assignment.svg";
const ModuleSlider = () => {
  const location = useLocation();

  return (
    <div className="module-slider-container">
      <Link to="/module/topic">
        <div
          className={`module-slider-div ${
            location.pathname === "/module/topic" ? "active" : ""
          }`}
        >
          {location.pathname === "/module/topic" ? (
            <img src={activeTopicImg} />
          ) : (
            <img src={inActiveTopicImg} />
          )}
          <p>Python Loops</p>
        </div>
      </Link>

      <Link to="/module/quiz">
        <div
          className={`module-slider-div ${
            location.pathname === "/module/quiz" ? "active" : ""
          }`}
        >
          {location.pathname === "/module/quiz" ? (
            <img src={activeQuizImg} />
          ) : (
            <img src={inActiveQuizImg} />
          )}
          <p>Quiz-1: Data Types</p>
        </div>
      </Link>

      <Link to="/module/assignment">
        <div
          className={`module-slider-div ${
            location.pathname === "/module/assignment" ? "active" : ""
          }`}
        >
          {location.pathname === "/module/assignment" ? (
            <img src={activeAssignmentImg} />
          ) : (
            <img src={inActiveAssignmentImg} />
          )}
          <p>Assignment-1: Operators | Loops</p>
        </div>
      </Link>
    </div>
  );
}

export default ModuleSlider