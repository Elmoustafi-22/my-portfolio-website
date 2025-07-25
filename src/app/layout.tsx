import { Poppins, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins'
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken-grotesk",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  title: "Mustopha's Portfolio",
  description:
    "Explore the portfolio of Mustopha Abdulqadir, a passionate software engineer specializing in modern, responsive web applications using React, Next.js, TypeScript, and Tailwind CSS. Discover featured projects, skills, and professional experiences.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${hankenGrotesk.variable}`}
      >
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
