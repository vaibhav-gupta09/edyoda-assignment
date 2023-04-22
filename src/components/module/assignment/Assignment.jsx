import React from 'react'
import ModuleSlider from '../module-slider/ModuleSlider'
import './Assignment.css'

const Assignment = () => {
  return (
    <div className='assignment-container'>
      <ModuleSlider/>
      <div className='assignment-content'>
        Assignment Content
      </div>
    </div>
  )
}

export default Assignment