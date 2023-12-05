import React from "react";

// Importing all created components

import Navbar from "./Navbar";
import Footer from "./Footer";

// Pass the child props
export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row mb-auto h-full">
        
        <div className="h-full w-screen flex-grow">{children}</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}