import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import './Titlebar.css';
const Titlebar = () => {
  return (
    <div className="titlebar-container">
      <div className="left-container">
        <h1 className='main-heading'>EDYODA</h1>
      </div>
      <div className="right-container">
        <h3 id='right-containe-h3'>Hi Test Learner!</h3>
        <PersonIcon />
      </div>
    </div>
  );
}

export default Titlebar