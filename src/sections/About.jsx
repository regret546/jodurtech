import { div } from "motion/react-client";
import React from "react";

function About() {
  return (
    <div className=" w-[70%] mt-4 rounded-md">
      <div className="flex relative bg-accent-blue border-fg border-2 border-l-0">
        <img
          className="w-[30%] p-2 h-[400px] bg-fg absolute object-cover "
          src="./src/assets/jodur-kun.jpg"
          alt="jodur image"
        />
        <p className="w-[68%] ml-auto text-[2.5rem]">
          Hi, I'm John. I work as a System Administrator during the day and
          transform into a Web Developer at night.
        </p>
      </div>
      <div className="w-[68%] ml-auto grid gap-2">
        <p>
          By day, I manage IT infrastructure, maintaining servers,
          troubleshooting networks, securing systems, and ensuring reliable
          operations. My responsibilities also extend to user access management,
          data protection, automation, and maintaining cloud environments to
          support scalability and business continuity.
        </p>
        <p>
          In my free time, I focus on web development, creating modern,
          responsive websites. This site showcases my passion for both IT and
          development, sharing projects, ideas, and experiences across both
          fields.
        </p>
      </div>
    </div>
  );
}

export default About;
