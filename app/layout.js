import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "SSP Portfolio",
  description: "My Portfolio for my Senior Spring Project at BB&N!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
