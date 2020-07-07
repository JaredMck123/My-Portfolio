import React from "react";
import logo from "./ga_state.png";
import "./home.css";

function Home() {
  return (
    <div className="home_body">
      <h1 className="head">About Me</h1>
      <div className="home_content">
        <div>
          <img
            style={{ height: "400px", width: "500px" }}
            src={logo}
            alt="GSU"
            className="photo"
          />
        </div>

        <div>
          <ul>
            <br></br>
            <li>
              Hello! My name is Jared Mckinney and I am a Computer Science major
              attending Georgia State University.
            </li>
            <br></br>
            <li>
              I am currently a junior with a concentration in Databases and
              Knowledge-based Systems (DKS).
            </li>
            <br></br>
            <li>
              My interests are not limited to, but include: problem solving,
              web-development, and competitive programming.
            </li>
            <br></br>
            <li>
              Relevant academic coursework I have completed include Data
              Structures and Algorithms, Web Programming, and Database Systems.
            </li>
            <br></br>
            <li>
              I have also individually completed Udemy courses on Web
              Development, Node.js, React.js, Python3, and SQL.
            </li>
          </ul>
        </div>
      </div>
      <div style={{ height: "30px", backgroundColor: "white" }}></div>
    </div>
  );
}

export default Home;
