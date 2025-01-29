import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "500", "700"],
  subsets: ["latin"]
})

export const metadata = {
  title: "My Portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
