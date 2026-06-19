export interface SkillCategory {
  category: string;
  items: string[];
  icon: string; // Name of Lucide icon to display
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend & API Development",
    icon: "Cpu",
    items: [
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "Middleware Architecture",
      "Secure Token Management",
      "Input Validation & Sanitization",
    ],
  },
  {
    category: "Databases & Security",
    icon: "Database",
    items: [
      "MongoDB",
      "Mongoose ODM",
      "Schema Design",
      "Data Integrity",
      "Secure Authentication (JWT)",
      "Role-Based Access Control (RBAC)",
    ],
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    items: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux / Redux Toolkit",
      "Context API / Zustand",
      "React Router",
    ],
  },
  {
    category: "Styling & UI Performance",
    icon: "Palette",
    items: [
      "Tailwind CSS",
      "CSS Modules",
      "Figma-to-Code (Pixel-Perfect)",
      "Mobile-First & Responsive Web Design",
      "Cross-Browser Compatibility",
    ],
  },
  {
    category: "Performance & Accessibility",
    icon: "Zap",
    items: [
      "Core Web Vitals Optimization",
      "Image Optimization",
      "Lazy Loading",
      "Code Splitting",
      "WCAG 2.1 AA Compliance",
    ],
  },
  {
    category: "Deployment & Infrastructure",
    icon: "Cloud",
    items: [
      "Render",
      "AWS",
      "Vercel",
      "CI/CD Workflows",
      "Environment Configuration",
      "Cloudinary Integration",
    ],
  },
  {
    category: "Developer Tools & Methodologies",
    icon: "GitBranch",
    items: [
      "Git / GitHub",
      "Vite / npm",
      "CI/CD Workflows",
      "Agile / Scrum",
      "Technical Documentation",
      "Jest",
    ],
  },
];