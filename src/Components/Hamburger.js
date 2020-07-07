import React from "react";
import "./hamburger.css";
import { Link } from "react-router-dom";
function Hamburger(props) {
  let hamburgerClasses = "side_drawer";

  if (props.show) {
    hamburgerClasses = "side_drawer open";
  }
  return (
    <nav className={hamburgerClasses}>
      <ul>
        <Link className="link" to="/">
          <li>Home</li>
        </Link>
        <div className="line" />
        <Link className="link" to="/projects">
          <li>Projects</li>
        </Link>
        <div className="linee" />
        <Link className="link" to="/resume">
          <li>Resume</li>
        </Link>
        <div className="line" />
      </ul>
    </nav>
  );
}

export default Hamburger;
