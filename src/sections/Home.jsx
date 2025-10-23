import Button from "../components/UI/Button";

function Home() {
  return (
    <div className="2xl:w-[60%] 1xl:w-[80%] w-[95%] mt-4 rounded-md z-0">
      <div className="1xl:flex relative bg-accent-blue rounded-2xl p-2 grid ">
        <img
          className="1xl:h-[400px] 1xl:w-[30%] 1xl:absolute 1xl:block hidden relative h-[300px] w-[40%] object-cover rounded-2xl "
          src="./src/assets/jodur-kun.jpg"
          alt="jodur"
        />
        <p className="1xl:w-[68%] w-full  ml-auto 1xl:text-[1.8rem] text-[1.4rem] p-4">
          <span className="font-extrabold 1xl:text-[3.5rem] text-[3rem] 1xl: text-left">
            Hi, I'm John.
          </span>{" "}
          <br></br>I work as a System Administrator during the day and transform
          into a Web Developer at night.
        </p>
      </div>
      <img
        className=" object-cover rounded-2xl 1xl:hidden mt-4 h-[350px] w-full"
        src="./src/assets/jodur-kun.jpg"
        alt="jodur"
      />
      <div className="1xl:w-[68%] ml-auto grid gap-2 text-[1rem] p-4">
        <p>
          I manage IT systems by day, keeping servers, networks, and cloud
          environments running smoothly.
        </p>
        <p>
          In my free time, I design and build responsive websites. This site
          brings those worlds together, sharing my projects, ideas, and love for
          both IT and development.
        </p>
        <Button name={"Contact Me"} />
      </div>
    </div>
  );
}

export default Home;
