import React, { useRef, useState } from "react";
import {
  motion,
  MotionConfig,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

const listItems = [
  { label: "About", color: "bg-accent-blue" },
  { label: "Skills", color: "bg-accent-green" },
  { label: "Work", color: "bg-accent-purple" },
  { label: "Certificates", color: "bg-accent-orange" },
  { label: "Blog", color: "bg-accent-red" },
  { label: "Contact", color: "bg-accent-teal" },
];

const navBarColor = ["bg-accent"];

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className={`absolute top-1/2 left-1 -translate-y-1/2 z-0 h-[85%] rounded-full ${position.color}`}
    />
  );
};

const MenuButton = ({ active, setActive }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <motion.button
        type="button"
        initial={false}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-15 w-15 rounded-full bg-black hover:bg-black/20 transition-colors duration-300"
        animate={active ? "open" : "close"}
      >
        {/* Top bar */}
        <motion.span
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-1 w-10 bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />

        {/* Middle bar */}
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-1 w-10 bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            close: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />

        {/* Right bar */}
        <motion.span
          style={{
            left: "calc(50% + 10px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-1 w-5 bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: "50%",
              bottom: "50%",
              width: "40px",
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              left: "calc(50% + 10px)",
              bottom: "35%",
              width: "20px",
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const NavBar = () => {
  const { scrollY } = useScroll();
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    bgColor: "blue",
  });
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const borderColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0,0,0,1)", "rgba(0,0,0,0)"]
  );

  return (
    <motion.div
      className={`sticky top-0 grid md:justify-center bg-base transition-all duration-300  ${
        scrolled ? "shadow-[-1px_7px_0px_-2px_rgba(0,_0,_0,_0.1)] p-3" : "p-2"
      }`}
    >
      <div className="flex items-center justify-between max-w-full ">
        {/* 🖥️ Desktop nav */}
        <motion.ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          style={{
            borderColor,
            borderWidth: "2px",
            borderStyle: "solid",
          }}
          className="hidden md:flex w-fit relative gap-6 border-2 p-4 rounded-full"
        >
          {listItems.map((item, index) => {
            const ref = useRef(null);
            return (
              <li
                ref={ref}
                onMouseEnter={() => {
                  if (!ref.current) return;
                  const { width } = ref.current.getBoundingClientRect();
                  setPosition({
                    width: width + 20,
                    opacity: 1,
                    left: ref.current.offsetLeft - 10,
                    color: item.color,
                  });
                  console.log(position);
                }}
                className="cursor-pointer relative tracking-wider font-medium z-10 text-black "
                key={item.label}
              >
                {item.label.toUpperCase()}
              </li>
            );
          })}
          <Cursor position={position} />
        </motion.ul>

        {/* Mobile button */}
        <div className="md:hidden relative min-w-full grid justify-end">
          <div className="">
            <MenuButton active={mobileOpen} setActive={setMobileOpen} />
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex flex-col gap-4 p-4 mt-2 md:hidden border-2 bg-base rounded-lg"
        >
          {listItems.map((item, index) => (
            <motion.li
              key={item}
              className="cursor-pointer tracking-wider text-fg font-medium"
              initial={{
                translateY: -10,
                scale: 0,
              }}
              animate={{
                scale: 1,
                translateY: 0,
              }}
              transition={{
                duration: 0.25 * index + 0.1,
                type: "spring",
              }}
              onClick={() => setMobileOpen(false)}
            >
              <span className="fa-solid fa-arrow-right mr-2"></span>
              {item.label.toUpperCase()}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
};

export default NavBar;
