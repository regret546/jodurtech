import React from "react";
import ContactMeBtn from "../components/UI/ContactMeBtn";

function Home() {
  return (
    <div className=" w-[60%] mt-4 rounded-md">
      <div className="flex relative bg-accent-blue rounded-2xl p-2 ">
        <img
          className="w-[30%]  h-[400px] absolute object-cover rounded-2xl "
          src="./src/assets/jodur-kun.jpg"
          alt="jodur image"
        />
        <p className="w-[68%] ml-auto text-[1.8rem] p-4">
          <span className="font-extrabold text-4xl">Hi, I'm John.</span>{" "}
          <br></br>I work as a System Administrator during the day and transform
          into a Web Developer at night.
        </p>
      </div>
      <div className="w-[68%] ml-auto grid gap-2 text-[1rem] p-4">
        <p>
          By day, I manage IT infrastructure, maintaining servers,
          troubleshooting networks, securing systems, and supporting cloud
          environments for scalability and continuity. I also handle user
          access, data protection, and automation
        </p>
        <p>
          In my free time, I build modern, responsive websites. This site
          reflects my passion for both IT and development, showcasing projects
          and ideas from both fields.
        </p>
        <ContactMeBtn />
      </div>
    </div>
  );
}

export default Home;
