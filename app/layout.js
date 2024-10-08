import { Inter } from "next/font/google";
import "./globals.css";
import Header1 from "./components/layout/Navbar";
import Footer5 from "./components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PathvaAI",
  description: "Your Travelling Ca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header1 />
        {children}
        <Analytics />
        <Footer5 />
      </body>
    </html>
  );
}
