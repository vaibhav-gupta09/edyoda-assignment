import React from 'react';
import './Instructor.css';
import codingTeacher from '../../assets/coding-teacher.jpeg';
const Instructor = () => {
  return (
    <div className="instructor-wrapper">
      <div className="instructor-main">
        <img src={codingTeacher} />
        <h1>Data Science Expert</h1>
      </div>
    </div>
  );
}

export default Instructor