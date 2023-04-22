import React from 'react'
import ModuleSlider from '../module-slider/ModuleSlider'
import './Quiz.css'
const Quiz = () => {
  return (
    <div className='quiz-container'>
      <ModuleSlider/>
      <div className='quiz-content'>
        Quiz Content
      </div>
    </div>
  )
}

export default Quiz