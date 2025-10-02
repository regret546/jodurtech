import { useState } from "react";
import NavBar from "./components/Navbar";
import About from "./sections/Home";
import Certificates from "./sections/Certificates";

import "./style.css";

function App() {
  return (
    <>
      <div className=" h-[screen] w-[100%] bg-bg">
        <NavBar />
        <div className="grid gap-4 justify-items-center">
          <About />
          <Certificates />
        </div>
      </div>
    </>
  );
}

export default App;
