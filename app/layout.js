import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata = {
  title: "SSP Portfolio",
  description: "My Portfolio for my Senior Spring Project at BB&N!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
