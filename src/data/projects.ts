import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "DoLessons",
    image: "/images/dolessons.png",
    description:
      "DoLessons is a global online tutoring platform connecting students with expert tutors. I built and scaled responsive public pages and authenticated dashboards using Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["React", "Nextjs", "Tailwind CSS", "Git"],
    github: "", // Assuming private or not provided
    live: "https://www.dolessons.com/",
    role: "Frontend Developer",
    contribution:
      "Translated Figma designs into pixel-perfect components, integrated REST APIs with proper error handling, and developed reusable UI components to improve development speed and consistency.",
  },
  {
    title: "peermoove",
    image: "/images/peermoove.png",
    description:
      "peerMoove is a student-powered earning and delivery platform for campus life. Send, receive, or purchase anything on campus — fast, affordable, and powered by your peers.",
    technologies: ["React", "Tailwindcss"],
    github: "https://github.com/Moovee-Inc/moovee-website-frontend",
    live: "https://www.peermoove.com/",
    role: "Frontend Developer (Team Project)",
    contribution:
      "Implemented reusable UI components using React and Tailwind CSS, collaborated with the team on page structure",
  },
  {
    title: "BTWAWI",
    image: "/images/btwawi.png",
    description:
      "BTWAWI is a multi-page event-driven web application built with React, Tailwind CSS, Node.js, and MongoDB. It includes event booking, business nominations, donations, sponsorships, and dedicated Lagos and Abuja pages for regional events.",
    technologies: ["React", "TailwindCss", "Node.js", "MongoDB"],
    github: "https://github.com/Smartrove/btwawi-3.0",
    live: "https://www.btwawi.com/",
    role: "Fullstack Developer (Team Project)",
    contribution:
      "Developed multiple frontend pages (booking, secure-a-booth, grant, business nomination, donation, sponsorship, contact, landing, Lagos, Abuja) using React and Tailwind CSS. Implemented backend form handling and integrations with Node.js and MongoDB, while optimizing SEO and performance across the platform.",
  },
  {
    title: "e-Likita Hospital Consultation Assistant",
    image: "/images/e-likita.png",
    description:
      "e-Likita is a web-based hospital consultation assistant that guides patients through a multi-step triage process. Built with React, TypeScript, and Vite, it assesses symptoms, provides risk evaluation, and offers personalized healthcare recommendations.",
    technologies: ["React", "TailwindCss", "Node.js", "MongoDB", "Express", ""],
    github: "https://github.com/Elmoustafi-22/e-likita-frontend",
    live: "https://e-likita-frontend-mauve.vercel.app/",
    role: "Fullstack Developer",
    contribution:
      "Developed the frontend pages and provided RESTful APIs for user authentication, patient records, and medical consultations with An AI agent.",
  },
  {
    title: "Remote Job Finder",
    image: "/images/remote-job-finder.png",
    description:
      "Remote Job Finder is a web application built with React, Next.js, and Tailwind CSS that helps job seekers, find remote job opportunities efficiently. 🚀💼",
    technologies: ["React", "Nextjs", "TailwindCss"],
    github: "https://github.com/Elmoustafi-22/remote-job-finder",
    live: "https://remote-job-finder.vercel.app/",
    role: "Solo Frontend Developer",
    contribution:
      "Created a responsive UI for browsing and filtering jobs, integrated job API endpoints, and optimized the site for usability and performance.",
  },
  {
    title: "GreenGlow",
    image: "/images/greenglow.png",
    description:
      "GreenGlow is a responsive single-page website with a plant-themed design, built using React and Tailwind CSS to promote eco-friendly living. 🌿✨",
    technologies: ["HTML5", "TailwindCss", "Javascript"],
    github: "https://github.com/Elmoustafi-22/greenglow",
    live: "https://greenglow.vercel.app/",
    role: "Frontend Developer",
    contribution:
      "Designed and built a responsive landing page with plant-themed visuals, styled using Tailwind CSS, and optimized for mobile and desktop views.",
  },
];
