import { useState } from "react";
import NavBar from "./components/Navbar";
import Home from "./sections/Home";
import Certificates from "./sections/Certificates";
import About from "./sections/About";
import Project from "./sections/Project";
import Experience from "./sections/Experience";

import "./style.css";

function App() {
  return (
    <>
      <div className=" h-[screen] w-[100%] bg-bg">
        <NavBar />
        <div className="grid gap-4 justify-items-center">
          <Home />
          <About />
          <Project />
          <Certificates />
          <Experience />
        </div>
      </div>
    </>
  );
}

export default App;
