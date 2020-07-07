import React from "react";

import "./hamburger.css";

function Toggle(props) {
  return (
    <div>
      <button onClick={props.click} className="hamburger">
        <div className="hamburger_line"></div>
        <div className="hamburger_line"></div>
        <div className="hamburger_line"></div>
      </button>
    </div>
  );
}

export default Toggle;
