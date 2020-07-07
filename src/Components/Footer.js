import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div class="foot">
      <div className="foot_name">Jared Mckinney</div>
      <div className="space"></div>
      <div className="foot_links">
        <a id="github" href="https://github.com/JaredMck123">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      <div className="foot_links">
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/jared-mckinney-b519a115a/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
