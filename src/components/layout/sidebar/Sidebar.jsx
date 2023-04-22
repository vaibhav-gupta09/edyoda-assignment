import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import HomeIcon from "@mui/icons-material/Home";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
const Sidebar = () => {
  // const[activeLink, setActiveLink] = useState('home');
  // const handleClick = (link)=>{
  //     setActiveLink(link);
  // }

  const location = useLocation();

  return (
    <div className="sidebar-container">
      <Link
        to="/"
        // onClick={() => {
        //   handleClick("home");
        // }}
      >
        <div
          className={`icon-container ${
            location.pathname === "/" ? "sidebar-active" : ""
          }`}
        >
          <HomeIcon className="my-icon" fontSize="large" />
          <br />
          HOME
        </div>
      </Link>

      <Link
        to="/module/topic"
        // onClick={() => {
        //   handleClick("module");
        // }}
      >
        <div
          className={`icon-container ${
            location.pathname.startsWith("/module")
              ? "sidebar-active"
              : ""
          }`}
        >
          <ViewModuleIcon className="my-icon" fontSize="large" />
          <br />
          MODULE
        </div>
      </Link>

      <Link
        to="/instructor"
        // onClick={() => {
        //   handleClick("instructor");
        // }}
      >
        <div
          className={`icon-container ${
            location.pathname === "/instructor" ? "sidebar-active" : ""
          }`}
        >
          <InterpreterModeIcon className="my-icon" />
          <br />
          INSTRUCTOR
        </div>
      </Link>
    </div>
  );
}

export default Sidebar