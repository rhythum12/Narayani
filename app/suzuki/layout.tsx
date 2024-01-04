import React from "react";
// import Navbar from "./Navbar";
import Navbar from "./components/Navbar";
import { Footer } from "./components";

export default function SuzukiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className="relative">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
