import identityImg from "../assets/images/identity.png";
import orgPortalImg from "../assets/images/orgportal.png";
import hospitalImg from "../assets/images/hospital.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <img
            src={identityImg}
            className="zoom"
            alt="Identity Control Panel"
            width="100%"
            height="300px"
          />
          <h2>Identity Control Panel</h2>
          <p>
            RBAC-driven control panel managing the full user lifecycle (create, update, deactivate)
            with dynamic role assignments and permission mapping for secure multi-role access. Built
            authentication workflows and authorization guards for consistent access control across
            all modules. Tech: Next.js, TypeScript, React, TanStack Query, Tailwind CSS.
          </p>
        </div>
        <div className="project">
          <img
            src={orgPortalImg}
            className="zoom"
            alt="Platform Org Portal"
            width="100%"
            height="300px"
          />
          <h2>Platform Org Portal</h2>
          <p>
            Multi-tenant agency configuration platform with dynamic API integrations that adapt per
            agency code and URL for go-live operations. Delivered full CRUD workflows for Payers and
            Base Services with advanced search, filters, bulk add/edit forms, and complex
            payer-service relationship mapping. Tech: Next.js, TypeScript, React, TanStack Query,
            Zustand, Tailwind CSS.
          </p>
        </div>
        <div className="project">
          <img
            src={hospitalImg}
            className="zoom"
            alt="Hospital Management System"
            width="100%"
            height="300px"
          />
          <h2>Hospital Management System</h2>
          <p>
            Led frontend development of a Hospital Management System with responsive CRUD workflows
            and clean component architecture for patient and doctor modules. Built and consumed .NET
            C# REST APIs, using SQL and Entity Framework to trace data across the API and database
            layers. Tech: React.js, .NET C#, SQL, Entity Framework.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
