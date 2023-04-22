import React from 'react'
import { Link } from "react-router-dom";
import './ModuleSlider.css'
const ModuleSlider = () => {
  return (
    <div className='module-slider-container'>
      <Link to="/module/topic">
        <div className="icon-container">
          <br />
          Topic
        </div>
      </Link>

      <Link to="/module/quiz">
        <div className="icon-container">
          <br />
          Quiz
        </div>
      </Link>

      <Link to="/module/assignment">
        <div className="icon-container">
          <br />
          Assignment
        </div>
      </Link>
    </div>
  );
}

export default ModuleSlider