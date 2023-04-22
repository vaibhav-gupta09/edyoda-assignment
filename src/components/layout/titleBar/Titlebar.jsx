import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import { Link } from 'react-router-dom';
import './Titlebar.css';
const Titlebar = () => {
  return (
    <div className="titlebar-container">
      <div className="left-container">
        <Link to='/'>
        <h1 className='main-heading'>EDYODA</h1>
        </Link>
      </div>
      <div className="right-container">
        <h3 id='right-containe-h3'>Hi Test Learner!</h3>
        <PersonIcon />
      </div>
    </div>
  );
}

export default Titlebar