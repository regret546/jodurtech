import { button } from "motion/react-client";
import React from "react";
import { motion, MotionConfig } from "motion/react";

function ContactMeBtn() {
  return (
    <motion.button
      className="px-6 py-3 border border-black  flex items-center gap-3 font-bold w-[180px] relative cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
        hover: { y: -5, boxShadow: "6px 6px 0px #000" },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "linear",
        }}
      >
        <motion.span
          className="font-bold"
          variants={{
            rest: { scale: 0.9 },
            hover: { scale: 1.1 },
          }}
        >
          Contact Me
        </motion.span>
        <motion.span
          variants={{
            rest: { opacity: 1, right: 20 },
            hover: { opacity: 0, right: 10 },
          }}
          className="fa-solid fa-arrow-right absolute text-[0.9rem]"
        ></motion.span>

        <motion.span
          variants={{
            rest: { opacity: 0, left: 150 },
            hover: { opacity: 1, right: 10, color: "#1E90FF" },
          }}
          className="fa-solid fa-arrow-right absolute text-[0.9rem]"
        ></motion.span>
      </MotionConfig>
    </motion.button>
  );
}

export default ContactMeBtn;
