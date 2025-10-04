import HeaderLine from "../components/UI/HeaderLine";
import { motion, MotionConfig } from "framer-motion";
import { truncateWords } from "../utils";

const projectList = [
  {
    name: "Paint.app",
    image: "./src/assets/example-project.jpg",
    githubUrl: "https://github.com/",
    techStack: ["FLutter", "MUI", "Python", "FastAPI"],
    description:
      "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.",
  },
  {
    name: "Todo App",
    image: "./src/assets/example-project.jpg",
    githubUrl: "https://github.com/",
    techStack: ["JavaScript", "Express", "MongoDB"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci odit delectus laudantium! Aperiam, ex vel ea doloremque velit saepe suscipit! Libero repellat, illo recusandae et omnis fugiat tempore expedita.",
  },
  {
    name: "Paint.app",
    image: "./src/assets/example-project.jpg",
    githubUrl: "https://github.com/",
    techStack: ["FLutter", "MUI", "Python", "FastAPI"],
    description:
      "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.",
  },
  {
    name: "Todo App",
    image: "./src/assets/example-project.jpg",
    githubUrl: "https://github.com/",
    techStack: ["JavaScript", "Express", "MongoDB"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci odit delectus laudantium! Aperiam, ex vel ea doloremque velit saepe suscipit! Libero repellat, illo recusandae et omnis fugiat tempore expedita.",
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
    <div className=" w-[60%] mt-[4rem] ">
      <h2 className="font-extrabold text-[3.5rem] mb-5 flex w-full items-center text-accent-blue">
        <HeaderLine color="accent-blue" />
        Project.
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {projectList.map((project) => (
          <div key={project.name} className="grid gap-2">
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
                className="rounded-lg"
              />
            </motion.div>
            <div className="appName">
              <h2 className="font-extrabold text-2xl flex w-full items-center text-fg whitespace-nowrap">
                {project.name} <HeaderLine color="black" />{" "}
                <span className="fa-brands fa-github cursor-pointer text-[1.5rem] hover:text-fg/60 transition ease-in-out duration-300 mr-2"></span>
                <span className="fa-solid fa-link cursor-pointer text-[1.5rem] hover:text-fg/60 transition ease-in-out duration-300"></span>
              </h2>
            </div>
            <div className="appTechStack text-accent-blue text-[1.1rem]">
              {project.techStack.join(" - ")}
            </div>
            <div className="appDescription">
              {truncateWords(project.description, 15)}{" "}
              <span className="text-accent-blue cursor-pointer">
                Learn more
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
