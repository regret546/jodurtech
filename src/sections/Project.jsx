import HeaderLine from "../components/UI/HeaderLine";
import { motion, MotionConfig } from "framer-motion";
import { div, li } from "motion/react-client";

const projectList = [
  {
    name: "Paint.app",
    image: "./src/assets/example-project.jpg",
    githubUrl: "https://github.com/",
    techStack: ["FLutter", "MUI", "Python", "FastAPI"],
    info: "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.",
  },
  {
    name: "Todo App",
    image: "./src/assets/example-project.jpg",
    githubUrl: "https://github.com/",
    techStack: ["JavaScript", "Express", "MongoDB"],
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci odit delectus laudantium! Aperiam, ex vel ea doloremque velit saepe suscipit! Libero repellat, illo recusandae et omnis fugiat tempore expedita.",
  },
  {
    name: "Paint.app",
    image: "./src/assets/example-project.jpg",
    githubUrl: "https://github.com/",
    techStack: ["FLutter", "MUI", "Python", "FastAPI"],
    info: "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.",
  },
  {
    name: "Todo App",
    image: "./src/assets/example-project.jpg",
    githubUrl: "https://github.com/",
    techStack: ["JavaScript", "Express", "MongoDB"],
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci odit delectus laudantium! Aperiam, ex vel ea doloremque velit saepe suscipit! Libero repellat, illo recusandae et omnis fugiat tempore expedita.",
  },
];

const parentVariants = {
  hover: {},
};

const childVariants = {
  initial: { y: "50px" },
  hover: { scale: 1.05, rotate: "2.5deg", y: "20px" },
};

function Project() {
  return (
    <div className=" w-[60%] mt-[4rem]  ">
      <h2 className="font-extrabold text-[3.5rem] flex w-full items-center text-accent-blue">
        <HeaderLine color="accent-blue" />
        Project.
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {projectList.map((project) => (
          <div key={project.name}>
            <motion.div
              variants={parentVariants}
              initial="initial"
              whileHover="hover"
              className="p-[2.5rem] pb-0 bg-accent-blue overflow-hidden rounded-lg cursor-pointer"
            >
              <motion.img
                src={project.image}
                alt={project.name}
                variants={childVariants}
                transition={{ duration: 0.125, ease: "easeInOut" }}
              />
            </motion.div>
            <div className="appName">
              <h2 className="font-extrabold text-2xl flex w-full items-center text-accent-blue whitespace-nowrap">
                {project.name} <HeaderLine color="accent-blue" />{" "}
                <span className="fa-brands fa-github cursor-pointer text-[1.5rem] hover:text-accent-blue/60 transition ease-in-out duration-300"></span>
                <span className="fa-solid fa-link cursor-pointer text-[1.5rem] hover:text-accent-blue/60 transition ease-in-out duration-300"></span>
              </h2>
            </div>
            <div className="appTechStack">{project.techStack.join(" - ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
