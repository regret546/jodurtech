import { redirectLink } from "../utils/redirectLink";
import HeaderLine from "../components/UI/HeaderLine";
import { motion, MotionConfig } from "motion/react";

function About() {
  return (
    <div className="2xl:w-[60%] 1xl:w-[80%] w-[95%] mt-[4rem]">
      <h2 className="font-extrabold text-[3.5rem] mb-5 flex items-center text-accent-blue">
        About.
        <HeaderLine color="accent-blue" />
      </h2>
      <div className="grid 1xl:flex gap-4 ">
        <div className="1xl:w-[60%] w-[95%] grid gap-4">
          <p>
            {" "}
            Hey! I’m John. By day I manage IT infrastructure, keep servers
            healthy, troubleshoot networks, and make sure everything runs
            securely and efficiently. I work with tools like Active Directory,
            Citrix, Group Policy, and Windows Server, which has given me a solid
            grounding in enterprise IT.
          </p>
          <p>
            Outside of work I focus on web development. I enjoy building modern,
            responsive websites with clean code and up-to-date frameworks. This
            site is where I bring those two worlds together, sharing projects,
            ideas, and my journey across IT and development.
          </p>

          <p>
            I’m always open to opportunities that connect IT with development.
            If you think we’d be a good fit, let’s connect!
          </p>
          <MotionConfig
            transition={{
              duration: 0.125,
              ease: "linear",
            }}
          >
            <div className="flex items-center text-accent-blue font-bold">
              <p>
                My links{" "}
                <motion.span
                  animate={{
                    x: [0, -7, 0], // keyframes: start → up → back
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop", // can be "loop", "mirror", "reverse"
                    ease: "easeInOut",
                  }}
                  className="fa-solid fa-arrow-right mx-1"
                ></motion.span>
              </p>

              <motion.i
                whileHover={{ scale: 1.5, color: "#1E90FF" }}
                onClick={() => redirectLink("https://github.com/regret546")}
                className="fa-brands fa-github text-2xl cursor-pointer mr-2"
              ></motion.i>
              <motion.i
                whileHover={{ scale: 1.5, color: "#1E90FF" }}
                onClick={() =>
                  redirectLink(
                    "https://www.linkedin.com/in/john-duran-495b24343/"
                  )
                }
                className="fa-brands fa-linkedin text-2xl cursor-pointer"
              ></motion.i>
            </div>
          </MotionConfig>
        </div>
        <div className="Skills 1xl:w-[40%] w-[95%] grid ">
          <div>
            <p className="font-extrabold  text-fg   mb-2">
              <span className="fa-solid fa-briefcase text-accent-blue mr-2"></span>
              Use at work:
            </p>

            <ul>
              <li>Windows Server</li>
              <li>Active Directory</li>
              <li>Group Policy</li>
              <li>Citrix</li>
              <li>RDS</li>
              <li>Office 365 Administration</li>
              <li>Powershell</li>
              <li>Automation & Scripting</li>
              <li>Vmware / Hyper-V</li>
              <li>Azure</li>
            </ul>
          </div>

          <div>
            <p className="font-extrabold  text-fg my-4">
              <span className="fa-solid fa-face-smile text-accent-blue mr-2"></span>
              Use for Fun:
            </p>

            <ul>
              <li>PHP</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>ExpressJS</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>NodeJS</li>
              <li>NextJS</li>
              <li>GitHub</li>
              <li>n8n</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
