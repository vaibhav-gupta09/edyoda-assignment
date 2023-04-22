import React, { useEffect, useState } from 'react'
import './Dropdown.css';
const Dropdown = (props) => {
  const [name, setName] = useState(
    localStorage.getItem("selectedProgram") || "DS031221"
  );

  const handleClick = (param)=>{
    props.setPrograme(param);
    setName(param);
    localStorage.setItem("selectedProgram", param);
  }
  return (
    <div className="dropdown-container">
      <p>Select Program</p>
      <div className="dropdown-container-options">
        {/* <p onClick={() => props.setPrograme("ECRD")}>ECRD</p> */}
        <p
          onClick={() => handleClick("ECRD")}
          className={`${name === "ECRD" ? "program-active" : ""}`}
        >
          ECRD
        </p>
        <p
          onClick={() => handleClick("FSR222222")}
          className={`${name === "FSR222222" ? "program-active" : ""}`}
        >
          FSR222222
        </p>
        <p
          onClick={() => handleClick("DS261121")}
          className={`${name === "DS261121" ? "program-active" : ""}`}
        >
          DS261121
        </p>
        <p
          onClick={() => handleClick("DS031221")}
          className={`${name === "DS031221" ? "program-active" : ""}`}
        >
          DS031221
        </p>
      </div>
    </div>
  );
}

export default Dropdown