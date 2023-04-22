import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import './ModuleSlider.css'
import topicImg from "../../../assets/activeTopic.svg";
import quizImg from "../../../assets/activeModuleQuiz.svg";
import assignmentImg from "../../../assets/activeAssignment.svg"
const ModuleSlider = () => {
  const location = useLocation();

  return (
    <div className="module-slider-container">
      <Link
        to="/module/topic">
        <div
          className={`module-slider-div ${
            location.pathname === "/module/topic" ? "active" : ""
          }`}
        >
          <img src={topicImg} />
          <p>Python Loops</p>
        </div>
      </Link>

      <Link
        to="/module/quiz">
        <div
          className={`module-slider-div ${
            location.pathname === "/module/quiz" ? "active" : ""
          }`}
        >
          <img src={quizImg} />
          <p>Quiz-1: Data Types</p>
        </div>
      </Link>

      <Link
        to="/module/assignment">
        <div
          className={`module-slider-div ${
            location.pathname === "/module/assignment" ? "active" : ""
          }`}
        >
          <img src={assignmentImg} />
          <p>Assignment-1: Operators | Loops</p>
        </div>
      </Link>
    </div>
  );
}

export default ModuleSlider