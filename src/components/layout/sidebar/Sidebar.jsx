import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';
import HomeIcon from "@mui/icons-material/Home";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Link to="/">
        <div className="icon-container">
          <HomeIcon className="my-icon" fontSize="large" />
          <br />
          HOME
        </div>
      </Link>

      <Link to="/module/topic">
        <div className="icon-container">
          <ViewModuleIcon className="my-icon" fontSize="large" />
          <br />
          MODULE
        </div>
      </Link>

      <Link to="/instructor">
        <div className="icon-container">
          <InterpreterModeIcon className="my-icon" />
          <br />
          NSTRUCTOR
        </div>
      </Link>
    </div>
  );
}

export default Sidebar