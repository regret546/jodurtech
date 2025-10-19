import HeaderLine from "../components/UI/HeaderLine";
import projectList from "../data/project";
import { motion } from "framer-motion";
import { truncateWords } from "../utils";
import { useState } from "react";
import DragDrawer from "../components/UI/DragDrawer";

const parentVariants = {
  hover: {},
};

const childVariants = {
  initial: { y: "50px" },
  hover: { scale: 1.05, rotate: "2.5deg", y: "20px" },
};

function Project() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  {
    console.log(open);
  }
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
              {truncateWords(project.description, 10)}{" "}
              <span
                className="text-accent-blue cursor-pointer"
                onClick={() => {
                  setOpen(true);
                  setSelectedProject(project);
                }}
              >
                Learn more
              </span>
            </div>
          </div>
        ))}
        {selectedProject && (
          <DragDrawer
            open={open}
            setOpen={setOpen}
            item={selectedProject}
          ></DragDrawer>
        )}
      </div>
    </div>
  );
}

export default Project;
