export interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  duration: string;
  isVolunteer?: boolean;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "DoLesssons",
    companyUrl: "https://dolessons.com",
    duration: "Jan 2026 – Present",
    highlights: [
      "Built and scaled responsive public landing pages and authenticated user dashboards using Next.js, TypeScript, and Tailwind CSS.",
      "Translated complex, high-fidelity Figma mockups into modular, reusable, and pixel-perfect React components, speeding up feature delivery and ensuring platform-wide consistency.",
      "Integrated robust REST APIs with advanced client-side data handling, implementing seamless loading states, error boundaries, and strict input validation.",
      "Optimized frontend application performance and client-side UI state using React Context to deliver smooth, production-ready user experiences.",
      "Maintained exceptional code quality through rigorous debugging cycles, structured component refactoring, and comprehensive technical documentation."
    ]
  },
  {
    role: "Frontend Developer & Tech Lead",
    company: "Infaq.ng",
    companyUrl: "https://infaq.ng",
    duration: "Dec 2025 – Present",
    isVolunteer: true,
    highlights: [
      "Led the technical direction and frontend architecture for a comprehensive fundraising web platform, building responsive public pages, detailed campaign views, and data-rich interfaces from the ground up.",
      "Architected full-featured, authenticated dashboards for three distinct user groups (Donors, Campaigners, and Admins) using Next.js, TypeScript, and Tailwind CSS.",
      "Designed and implemented client-side Role-Based Access Control (RBAC) paired with secure JWT token management and route protection to ensure tight frontend security.",
      "Built complex interactive features including campaign management pipelines, donation flows, a full admin panel, and visual campaign analytics.",
      "Supervised backend API design collaboration, defining precise data contracts, error handling schemas, and data validation rules to align with frontend performance requirements.",
      "Integrated async data fetching via Axios, implementing global loading states, error boundaries, and input sanitization for WCAG accessibility compliance."
    ]
  },
  {
    role: "Full-stack Web Developer",
    company: "BTWAWI",
    companyUrl: "https://btwawi.com",
    duration: "June 2025 – Present",
    isVolunteer: true,
    highlights: [
      "Developed and maintained responsive, scalable frontend interfaces using React and Tailwind CSS, focusing on accessibility and seamless user experiences across various devices.",
      "Facilitated smooth data flow by integrating frontend workflows with Node.js and Express backend services to manage form submissions and donation processing.",
      "Strengthened system architecture by integrating frontend and backend workflows, resulting in more reliable and maintainable applications.",
      "Managed some of the development lifecycle from coding to deployment using Git, GitHub, and Vercel, adhering to modern web standards and best practices."
    ]
  }
];
