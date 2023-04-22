import React, { useState } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const Header = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [program, setPrograme] = useState(
    localStorage.getItem("selectedProgram") || "DS031221"
  );
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <h3 id="header-container-h3">{program}</h3>
        {location.pathname === "/" ? (
          <div className="header-dropdown-container">
            <div className="arrow-icon" onClick={toggleDropdown}>
              {dropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
          </div>
        ) : (
          dropdownOpen === true? closeDropdown() : ""
        )}
        <h2 id="header-container-h2">Data Scientist Program</h2>
      </div>
      {location.pathname === "/" && dropdownOpen && (
        <Dropdown setPrograme={setPrograme} onClose={closeDropdown} />
      )}
    </div>
  );
}

export default Header