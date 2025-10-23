import React from "react";
import { redirectLink } from "../../utils";

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      onClick={() => redirectLink("https://resume.jodur.tech/")}
      {...rest}
      className="group  px-4 py-2 font-medium text-black transition-all duration-[400ms] hover:text-black cursor-pointer absolute 1xl:right-[10%] left-[2] tracking-wider z-20 hover:scale-110 "
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-accent-blue transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-accent-blue transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-accent-blue transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-accent-blue transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default DrawOutlineButton;
