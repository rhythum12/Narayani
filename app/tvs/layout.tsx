import React from "react";
// import Navbar from "./Navbar";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function TvsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body className="relative bg-neutral-950 ">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
