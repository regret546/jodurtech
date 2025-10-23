import { div, p } from "motion/react-client";
import { wrapSentencesInParagraphs } from "../../utils";
import {
  motion,
  useDragControls,
  useMotionValue,
  useAnimate,
} from "framer-motion";
import { useEffect } from "react";

function DragDrawer({ open, setOpen, item }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const controls = useDragControls();
  const y = useMotionValue(0);
  const [scope, animate] = useAnimate();
  const handleClose = async () => {
    const el = document.querySelector("#drawer");
    animate(scope.current, {
      opacity: [1, 0],
    });
    const yStart = typeof y.get() === "number" ? y.get() : 0;
    await animate(
      el,
      { y: [yStart, 500] },
      { duration: 0.2, ease: "easeInOut" }
    );
    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-fg/40 backdrop-blur-md grid justify-items-center ho"
        >
          <div className="fa-solid fa-xmark cursor-pointer absolute right-[30px] top-[30px] hover:scale-[1.5] transition-all"></div>
          <motion.div
            id="drawer"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            style={{ y }}
            ref={scope}
            transition={{
              ease: "easeInOut",
            }}
            onDragEnd={() => {
              if (y.get() >= 300) {
                handleClose();
              }
            }}
            drag="y"
            dragControls={controls}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
            className="absolute bottom-0 h-[80vh] 1xl:w-[700px] w-fit overflow-hidden  rounded-t-3xl bg-accent-blue"
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center border-e-accent-red p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-black active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              <div className="grid gap-4 text-bg">
                <img
                  className="rounded-lg mx-auto"
                  src={item.image}
                  alt={item.name}
                />
                <h3 className="font-extrabold text-2xl">{item.name}</h3>
                <div className="text-black"> {item.techStack.join(" - ")}</div>
                <div
                  className="grid gap-2"
                  dangerouslySetInnerHTML={{
                    __html: wrapSentencesInParagraphs(item.description),
                  }}
                ></div>
                <div>
                  <h3 className="font-extrabold text-2xl">Project Links.</h3>
                  <div className="flex text-black">
                    <p>
                      source code{" "}
                      <span className="fa-brands fa-github cursor-pointer text-[1.5rem] hover:text-bg transition ease-in-out duration-300 mr-2"></span>
                    </p>
                    <p>
                      live project{" "}
                      <span className="fa-solid fa-link cursor-pointer text-[1.5rem] hover:text-bg transition ease-in-out duration-300"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default DragDrawer;
