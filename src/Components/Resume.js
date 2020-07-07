import React from "react";
import "./resume.css";

function Resume() {
  return (
    <div>
      <h1>Education</h1>
      <div className="line" />
      <div className="education">
        <ul className="list_head">
          <li>
            <b>Georgia State University, College of Arts and Sciences</b>
          </li>
          <li className="space"></li>
          <li>Atlanta, Georgia</li>
        </ul>
        <ul className="list_head">
          <li>
            <i>B.S. in Computer Science</i>
          </li>
          <li className="space"></li>
          <li>Expected December 2021</li>
        </ul>
        <ul className="list_filler">
          <li>
            <b>GPA:</b> 3.7
          </li>
          <li>
            <b>Relevant Coursework:</b> Data Structures and Algorithms, Calculus
            2, Discrete Mathematics
          </li>
          <li>
            <b>Honors/Awards:</b> Dean’s List: Fall (2018 – Present), Presidents
            List: Fall (2019), Hope Scholarship
          </li>
        </ul>
      </div>
      <h1>Professional Experience</h1>
      <div className="line" />
      <div className="experience">
        <ul className="list_head">
          <li>
            <b>GEICO</b>
          </li>
          <li className="space"></li>
          <li>Macon, Georgia</li>
        </ul>
        <ul className="list_head">
          <li>
            <i>Youth Apprenticesip</i>
          </li>
          <li className="space"></li>
          <li>August 2017 - August 2018</li>
        </ul>

        <ul className="list_filler2">
          <li>• Handled total loss vehicles in company’s Salvage Department</li>
          <li>• Issued payments to customers </li>
          <li>
            • Completed Power of Attorneys to clients during claim handling
          </li>
        </ul>
      </div>

      <h1>Projects</h1>
      <div className="line" />
      <div className="projects_">
        <ul className="list_head">
          <li>
            <b>Sudoku Solver</b>
          </li>
          <li className="space"></li>
          <li>January 2020</li>
        </ul>
        <ul className="list_head">
          <li>
            <i>Individual Side Project</i>
          </li>
        </ul>

        <ul className="list_filler2">
          <li>
            • Implemented an algorithm involving backtracking and recursion to
            complete a semi-solved game of Sudoku using Python
          </li>
          <li>
            • Created a GUI that allows the user to play a game of Sudoku and
            can also solve the game interactively
          </li>
        </ul>
        <br />

        <ul className="list_head">
          <li>
            <b>Unit Converter</b>
          </li>
          <li className="space"></li>
          <li>June 2020</li>
        </ul>
        <ul className="list_head">
          <li>
            <i>Individual Side Project</i>
          </li>
        </ul>

        <ul className="list_filler2">
          <li>
            • Built a web application to convert between various units of
            measurements. Supports conversions of units including time, length,
            weight, and temperature
          </li>
          <li>
            • Created using the React.js framework, utilizing component
            rendering, state management, props, and the React Router Library
          </li>
        </ul>
      </div>
      <h1>Clubs and Organizations</h1>
      <div className="line" />
      <div className="clubs">
        <ul className="list_head">
          <li>
            <b>Panther Leap</b>
          </li>
          <li className="space"></li>
          <li>August 2019 - December 2019</li>
        </ul>
        <ul className="list_head">
          <li>
            <i>Member</i>
          </li>
        </ul>
        <ul className="list_filler2">
          <li>• Alumni of Georgia State’s leadership program</li>
          <li>
            • Gained leadership experience and skills as well as networked with
            fellow leaders
          </li>
          <li>
            • Participated in weekly sessions and completed a final Capstone
            project
          </li>
        </ul>
      </div>

      <h1>Skills and Interests</h1>
      <div className="line"></div>
      <div className="skills">
        <ul className="list_filler3">
          <li>
            <b>Languages:</b> JavaScript (ES6), Java, Python, HTML, CSS
          </li>
          <li>
            <b>Libraries/Frameworks:</b> React.js, CSS Flexbox, Pygame, JavaFX,
          </li>
          <li>
            <b>Interests:</b> Music, Traveling, Weightlifting, Skateboarding
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
