import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faMicrosoft, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "TanStack Query",
  "React Hook Form",
  "Zod",
  "Zustand",
  "Tailwind CSS",
  "SSR",
  "REST API Integration",
];

const labelsSecond = [".NET C#", "SQL", "Entity Framework", "ASP.NET Web API"];

const labelsThird = [
  "Git",
  "GitHub",
  "CI/CD",
  "Agile",
  "Jira",
  "Bitbucket",
  "Jest",
  "React Testing Library",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend Development</h3>
            <p>
              I build scalable, performant interfaces with React, Next.js, and TypeScript. I
              specialize in schema-driven form validation, RBAC-driven UI systems, SSR optimization,
              and clean, reusable component architecture.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faMicrosoft} size="3x" />
            <h3>Backend (Working Knowledge)</h3>
            <p>
              I have foundational backend exposure building and consuming REST APIs with .NET C# and
              ASP.NET Web API, and tracing data issues across SQL and Entity Framework for reliable
              API-to-database workflows.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faGitAlt} size="3x" />
            <h3>Tools, Testing & DevOps</h3>
            <p>
              I work within Agile teams using Git, GitHub, Bitbucket, and Jira, with CI/CD pipelines
              for delivery. I write tests with Jest and React Testing Library to keep components
              reliable and maintainable.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
