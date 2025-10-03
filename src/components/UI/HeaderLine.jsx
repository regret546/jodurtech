import React from "react";

function Line({ color }) {
  return (
    <span className={`inline-block w-[100%] bg-${color} h-[1px] m-2`}></span>
  );
}

export default Line;
