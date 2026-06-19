export interface EducationItem {
  degree: string;
  institution: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Science (BSc.) - Computer Science",
    institution: "Kwara State University, Nigeria",
    details: "Second Class Upper Division"
  },
  {
    degree: "Diploma in Computer Engineering and Networking",
    institution: "Omnitech Computer College",
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "Global Mentorship and Acceleration Program",
    issuer: "NextIF",
    year: "2025"
  },
  {
    title: "AI for Developers",
    issuer: "Alx",
    year: "2025"
  },
  {
    title: "AI Starter Kit",
    issuer: "Alx",
    year: "2025"
  },
  {
    title: "Alx Software Engineering",
    issuer: "Alx",
    year: "2024"
  },
  {
    title: "Soft-Skills Training",
    issuer: "Jobberman",
    year: "2020"
  },
  {
    title: "JavaScript Algorithm and Data Structure Certificate",
    issuer: "FreeCodeCamp",
    year: "2020"
  },
  {
    title: "Responsive Web Design Certificate",
    issuer: "FreeCodeCamp",
    year: "2020"
  },
  {
    title: "NYSC Certificate of National Service",
    issuer: "National Youth Service Corps",
    year: "2020"
  }
];
