import React from "react";
import "./navbar.css";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <header className="navbar">
      <nav className="navbar_nav">
        <div className="navbar_button">
          <Toggle click={props.buttonClick} />
        </div>
        <div className="navbar_logo">Professional Portfolio</div>
        <div className="space" />
        <div className="navbar_links">
          <ul>
            <Link className="link" to="/">
              <li>Home</li>
            </Link>
            <Link className="link" to="/projects">
              <li>Projects</li>
            </Link>
            <Link className="link" to="/resume">
              <li>Resume</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
