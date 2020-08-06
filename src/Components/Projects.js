import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="expense_tracker_app">
        <h1>
          <u>Expense Tracker</u>
        </h1>

        <p>
          This MERN fullstack application functions as an expense tracker.{" "}
          <br />
          The user is able to add and delete their expenses and assets, as well
          as view their <br />
          transaction history seamlessly in a single page window. <br />
          This application was built using:
        </p>
        <ul>
          <li>MongoDB</li>
          <li>Express.JS</li>
          <li>React.js</li>
          <li>Node.js</li>
        </ul>

        <a
          href="https://github.com/JaredMck123/Expense-Tracker"
          target="_blank"
        >
          <button>See Code</button>
        </a>

        <a href="https://afternoon-atoll-02626.herokuapp.com" target="_blank">
          <button>View Live Demo</button>
        </a>
      </div>
      <div className="conversion_app">
        <h1>
          <u>Unit Conversion App</u>
        </h1>

        <p>
          This web application takes a single unit and converts it's equivalent
          amount into various other units. <br />
          It supports conversions of units of length, time, weight, and
          temperature. <br />
          This application was built using:
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>React.js</li>
        </ul>

        <a
          href="https://github.com/JaredMck123/Unit-Conversion"
          target="_blank"
        >
          <button>See Code</button>
        </a>

        <a
          href="https://jaredmck123.github.io/Unit-Conversion/"
          target="_blank"
        >
          <button>View Live Demo</button>
        </a>
      </div>

      <div className="weather_app">
        <h1>
          <u> Weather App </u>
        </h1>

        <p>
          This weather app takes the users location and displays the outside
          temperature, current timezone, text forecast, and a glyphicon.
          <br /> This application is built using the following:
        </p>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>DarkSky API</li>
        </ul>

        <div className="buttons">
          <a href="https://github.com/JaredMck123/Weather-App" target="_blank">
            <button>See Code</button>
          </a>
          <a href="https://jaredmck123.github.io/Weather-App/" target="_blank">
            <button>View Live Demo</button>
          </a>
        </div>
      </div>

      <div className="sudoku_app">
        <h1>
          <u>Sudoku Solver</u>
        </h1>

        <p>
          This project involves solving a semi-completed board of Sudoku using
          backtracking and recursion.
          <br /> This application also includes a GUI component allowing the
          user to play a complete game of Sudoku. <br />
          The technologies involved include:
        </p>
        <ul>
          <li>Python</li>
          <li>Pygame</li>
        </ul>

        <div className="buttons">
          <a href="https://github.com/JaredMck123/Sudoku" target="_blank">
            <button>See Code</button>
          </a>

          <a href="https://youtu.be/LceE1qRKfYM" target="_blank">
            <button>View Live Demo</button>
          </a>
        </div>
      </div>

      <div className="calculator_app">
        <h1 class="app_head">
          <u>Expression Calculator</u>
        </h1>

        <p>
          This application performs basic arithmetic operations as well as
          advanced mathematical computations such as logarithms and exponential
          equations. <br />
          It was built using the following:
        </p>

        <ul>
          <li>Java</li>
          <li>JavaFX</li>
        </ul>

        <div className="buttons">
          <a href="https://github.com/JaredMck123/Calculator" target="_blank">
            <button>See Code</button>
          </a>
          <a href="https://youtu.be/512p8uZPg2M" target="_blank">
            <button>View Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
