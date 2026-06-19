import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "DoLessons",
    image: "/images/dolessons.png",
    description:
      "A global online tutoring platform connecting students with expert tutors. Features public landing pages and highly interactive, authenticated student/tutor dashboards.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Context", "REST APIs"],
    github: "",
    live: "https://www.dolessons.com/",
    role: "Frontend Developer",
    contribution:
      "Built and scaled responsive landing pages and dashboard features. Translated complex Figma mockups into modular, pixel-perfect React components. Integrated REST APIs with advanced loading states and optimized performance using React Context.",
  },
  {
    title: "e-Likita",
    image: "/images/e-likita.png",
    description:
      "An AI-powered hospital consultation assistant that guides patients through symptomatic triage, providing risk evaluation and personalized healthcare recommendations.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Gemini AI", "Tailwind CSS"],
    github: "https://github.com/Elmoustafi-22/e-likita-frontend",
    live: "https://e-likita-frontend-mauve.vercel.app/",
    role: "Fullstack Developer",
    contribution:
      "Developed responsive React/TypeScript interfaces with Tailwind CSS and integrated Axios with strict validation. Contributed to backend API design with Node.js/Express/MongoDB, and implemented Google AI SDK (Gemini) for intelligent medical triage assistance.",
  },
  {
    title: "NextIF Accelerator Platform",
    image: "/images/Accelerator.jpg",
    description:
      "A comprehensive dual-frontend full-stack platform serving 72+ mentees, enabling task management, progress tracking, event attendance, and submission workflows.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
    github: "", // Private repository
    live: "", // Demo details
    role: "Full-Stack Developer",
    contribution:
      "Architected a personalised Mentee Portal with XP progress tracking, task feedback, and event management. Built a robust Admin Portal with mentor management, bulk CSV onboarding, and attendance tracking. Designed RESTful backend API with dynamic task management, automated email alerts, and Cloudinary uploads.",
  },
  {
    title: "BTWAWI",
    image: "/images/btwawi.png",
    description:
      "A multi-page regional event booking, donation, sponsorship, and business nomination platform. Features regional event pages for Lagos and Abuja.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Vercel"],
    github: "https://github.com/Smartrove/btwawi-3.0",
    live: "https://www.btwawi.com/",
    role: "Full-stack Web Developer (Volunteer)",
    contribution:
      "Developed responsive frontend layouts using React and Tailwind CSS. Facilitated data flow by integrating frontend workflows with Node.js and Express backend services to manage form submissions and donation processing, while optimizing SEO.",
  },
];
