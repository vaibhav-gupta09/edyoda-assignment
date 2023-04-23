import React from 'react'
import ModuleSlider from '../module-slider/ModuleSlider'
import './Assignment.css'
import AssignmentHeader from './AssignmentHeader'
import AssignmentDetails from './AssignmentDetails'

const Assignment = () => {
  return (
    <div className='assignment-wrapper'>
      <ModuleSlider/>
      <div className='assignment-container'>
      <AssignmentHeader/>
      <AssignmentDetails/>
      </div>
    </div>
  )
}

export default Assignment