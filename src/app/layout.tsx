import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins'
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  // ─── Base URL (required so Next.js can resolve relative OG image paths) ───
  // Replace with your actual deployed domain once you publish the site.
  metadataBase: new URL("https://mustopha-portfolio.vercel.app"),

  // ─── Core tags ────────────────────────────────────────────────────────────
  title: "Mustopha Abdulqadir | Full-Stack Software Engineer",
  description:
    "Explore the portfolio of Mustopha Abdulqadir, a passionate software engineer specializing in modern, responsive web applications using React, Next.js, TypeScript, and Tailwind CSS. Discover featured projects, skills, and professional experiences.",

  // ─── Open Graph (Facebook, LinkedIn, WhatsApp, Slack, iMessage…) ──────────
  openGraph: {
    type: "website",
    url: "https://mustopha-portfolio.vercel.app",
    siteName: "Mustopha's Portfolio",
    title: "Mustopha Abdulqadir | Full-Stack Software Engineer",
    description:
      "Explore the portfolio of Mustopha Abdulqadir, a passionate software engineer specializing in modern, responsive web applications using React, Next.js, TypeScript, and Tailwind CSS.",
    images: [
      {
        url: "/images/Mustopha.png",   // resolved against metadataBase
        width: 1200,
        height: 630,
        alt: "Mustopha Abdulqadir – Full-Stack Software Engineer",
      },
    ],
    locale: "en_US",
  },

  // ─── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Mustopha Abdulqadir | Full-Stack Software Engineer",
    description:
      "Explore the portfolio of Mustopha Abdulqadir, a passionate software engineer specializing in modern, responsive web applications using React, Next.js, TypeScript, and Tailwind CSS.",
    images: ["/images/Mustopha.png"],
    // creator: "@your_twitter_handle",  // optional: add your Twitter handle
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable}`}
      >
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
