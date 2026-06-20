import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "NextIF Website",
    image: "/images/nextif.org.png",
    description:
      "The official web platform for NextIF — a tech accelerator empowering early-stage innovators. Features a public-facing site with responsive, mobile-first layouts and seamless third-party SDK integrations.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Zustand", "Axios", "React Router"],
    github: "", // Private repository
    live: "https://nextif.org",
    role: "Tech Lead (Volunteer)",
    contribution:
      "Owned end-to-end development of the frontend. Architected a reusable, strongly-typed component library with TypeScript that reduced new feature development time by 35%. Integrated third-party SDKs and REST APIs with secure authentication, input validation, and comprehensive error handling. Conducted code reviews and enforced best practices across the frontend codebase.",
  },
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
    title: "Infaq.ng",
    image: "/images/infaq.png",
    description:
      "An ethical crowdfunding and fundraising platform enabling communities to start campaigns, browse causes, and donate — helping everyone grow together through ethical giving. ₦2M+ raised.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "React Router"],
    github: "", // Private repository
    live: "https://infaq.ng",
    role: "Frontend Developer",
    contribution:
      "Owned end-to-end development of the frontend. Architected responsive, mobile-first campaign pages, authentication flows, and donation workflows. Translated designs into modular, reusable React components with TypeScript, and integrated REST APIs for campaign management and payment processing.",
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
      "Collaborated as part of a team to develop responsive frontend layouts using React and Tailwind CSS. Facilitated data flow by integrating frontend workflows with the team's Node.js and Express backend services to manage form submissions and donation processing, while contributing to SEO optimisation.",
  },
  {
    title: "NextIF Accelerator Platform",
    image: "/images/Accelerator.jpg",
    description:
      "A comprehensive dual-frontend full-stack platform built entirely from scratch, serving 72+ mentees with task management, progress tracking, event attendance, and submission workflows.",
    technologies: ["React", "Vite", "TypeScript", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
    github: "", // Private repository
    live: "",
    role: "Tech Lead & Full-Stack Developer (Volunteer)",
    contribution:
      "Personally designed and built the entire platform from scratch. Architected a personalised Mentee Portal with XP progress tracking, task feedback, and event management. Built a robust Admin Portal with mentor management, bulk CSV onboarding, and attendance tracking. Engineered the RESTful backend API with dynamic task management, automated email alerts, and Cloudinary media uploads.",
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
];
