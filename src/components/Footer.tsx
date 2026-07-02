import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
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
      <p>Portfolio built by Suresh Babu G S with 💜</p>
    </footer>
  );
}

export default Footer;
