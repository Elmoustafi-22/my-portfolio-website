import { Poppins, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})


export const metadata = {
  title: "Mustopha's portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
