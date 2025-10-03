import React from "react";
import ContactMeBtn from "../components/UI/ContactMeBtn";

function Home() {
  return (
    <div className=" w-[60%] mt-4 rounded-md z-0">
      <div className="flex relative bg-accent-blue rounded-2xl p-2 ">
        <img
          className="w-[30%]  h-[400px] absolute object-cover rounded-2xl "
          src="./src/assets/jodur-kun.jpg"
          alt="jodur image"
        />
        <p className="w-[68%] ml-auto text-[1.8rem] p-4">
          <span className="font-extrabold text-[3.5rem]">Hi, I'm John.</span>{" "}
          <br></br>I work as a System Administrator during the day and transform
          into a Web Developer at night.
        </p>
      </div>
      <div className="w-[68%] ml-auto grid gap-2 text-[1rem] p-4">
        <p>
          I manage IT systems by day, keeping servers, networks, and cloud
          environments running smoothly.
        </p>
        <p>
          In my free time, I design and build responsive websites. This site
          brings those worlds together, sharing my projects, ideas, and love for
          both IT and development.
        </p>
        <ContactMeBtn />
      </div>
    </div>
  );
}

export default Home;
