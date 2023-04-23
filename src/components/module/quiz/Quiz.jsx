import React from 'react'
import ModuleSlider from '../module-slider/ModuleSlider'
import './Quiz.css'
import QuizHeader from './QuizHeader';
import QuizDetails from './QuizDetails';
const Quiz = () => {
  return (
    <div className="quiz-wrapper">
      <ModuleSlider />
      <div className="quiz-container">
        <QuizHeader/>
        <QuizDetails/>
      </div>
    </div>
  );
}

export default Quiz