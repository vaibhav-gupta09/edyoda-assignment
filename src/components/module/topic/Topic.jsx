import React from 'react'
import ModuleSlider from '../module-slider/ModuleSlider'
import TopicHeader from './TopicHeader'
import './Topic.css'
import TopicDetails from './TopicDetails'
import SessionPlan from './SessionPlan'

const Topic = () => {
  return (
    <div className="topic-wrapper">
      <ModuleSlider />
      <div className="topic-container">
        <TopicHeader />
        <TopicDetails/>
        <SessionPlan/>
      </div>
    </div>
  );
}

export default Topic