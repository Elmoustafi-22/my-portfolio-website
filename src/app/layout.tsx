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
  metadataBase: new URL("https://mustopha.vercel.app"),

  // ─── Core tags ────────────────────────────────────────────────────────────
  title: "Mustopha Abdulqadir | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer skilled in React, Next.js, TypeScript & Node.js. I design and build fast, responsive web apps from scratch — check out my projects and experience.",

  // ─── Open Graph (Facebook, LinkedIn, WhatsApp, Slack, iMessage…) ──────────
  // Note: og:image is auto-generated from src/app/opengraph-image.tsx
  openGraph: {
    type: "website",
    url: "https://mustopha.vercel.app",
    siteName: "Mustopha's Portfolio",
    title: "Mustopha Abdulqadir | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer skilled in React, Next.js, TypeScript & Node.js. I design and build fast, responsive web apps from scratch.",
    locale: "en_US",
  },

  // ─── Twitter / X Card ─────────────────────────────────────────────────────
  // Note: twitter:image is auto-generated from src/app/opengraph-image.tsx
  twitter: {
    card: "summary_large_image",
    title: "Mustopha Abdulqadir | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer skilled in React, Next.js, TypeScript & Node.js. I design and build fast, responsive web apps from scratch.",
    creator: "@dev_mustopha",
  },

  // ─── Search Console Verification ──────────────────────────────────────────
  verification: {
    google: "x2FiMt385Ejgbo65ukkII3AxLL6_eP8uc1Xtgg_l_Cw",
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
