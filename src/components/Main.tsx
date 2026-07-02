import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a
              href="https://www.linkedin.com/in/suresh-babu-developer"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:sureshbabu170302@gmail.com">
              <EmailIcon />
            </a>
          </div>
          <h1>Suresh Babu</h1>
          <p>Software Engineer &middot; React &middot; Next.js &middot; TypeScript</p>

          <div className="mobile_social_icons">
            <a
              href="https://www.linkedin.com/in/suresh-babu-developer"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:sureshbabu170302@gmail.com">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
