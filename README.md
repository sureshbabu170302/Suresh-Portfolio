# Suresh Babu — Developer Portfolio 🚀

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## About

This is my personal developer portfolio — a single-page React app that showcases my career history, technical expertise, and projects. I'm a **Software Engineer** specializing in **React, Next.js, and TypeScript**, with experience building scalable healthcare platforms, RBAC-driven control panels, and API-integrated data workflows.

🔗 **Live site:** [sureshbabu-portfolio.netlify.app](https://sureshbabu-portfolio.netlify.app)

### Connect with me

- **LinkedIn:** [linkedin.com/in/suresh-babu-developer](https://www.linkedin.com/in/suresh-babu-developer)
- **Email:** [sureshbabu170302@gmail.com](mailto:sureshbabu170302@gmail.com)
- **Location:** Bangalore, Karnataka, India

> Built on top of the open-source [react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) by Yuji Sato.

## Features

✅ Responsive design & mobile-friendly  
✅ Dark and light mode toggle  
✅ Sections for About, Expertise, Career History, Projects, and Contact  
✅ Working contact form powered by [EmailJS](https://www.emailjs.com/) with toast notifications  
✅ Built with modern technologies (React, TypeScript, SCSS, and Material UI)

## Tech Stack

- **Framework:** React 18 + TypeScript (Create React App)
- **Styling:** SCSS / Sass, Material UI (MUI)
- **Icons:** MUI Icons, Font Awesome
- **Contact form:** EmailJS + react-toastify
- **Timeline:** react-vertical-timeline-component

## Quick Setup

1. Ensure you have [Node.js](https://nodejs.org/) installed. Check your installation by running:

   ```bash
   node -v
   ```

2. In the project directory, install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

5. Customize the content by navigating to the `/src/components` directory. Modify text, images, and other information as needed.

The page will reload if you make edits, and you will see any lint errors in the console.

## Environment Variables

The contact form uses EmailJS. Create a `.env` file in the project root with the following (Create React App requires the `REACT_APP_` prefix):

```bash
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** Never commit real secrets. Add `.env` to `.gitignore` before pushing to your repository. Restart the dev server after changing `.env`.

## Deployment (Netlify)

This portfolio is deployed on **Netlify** at [sureshbabu-portfolio.netlify.app](https://sureshbabu-portfolio.netlify.app).

1. Push this repository to GitHub.
2. In [Netlify](https://www.netlify.com/), create a new site and connect your GitHub repo.
3. Use these build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
4. Add the EmailJS environment variables (see above) under **Site settings → Environment variables**.
5. Deploy — Netlify will build and host the site, giving you a live URL.

Every push to the connected branch triggers an automatic redeploy.
