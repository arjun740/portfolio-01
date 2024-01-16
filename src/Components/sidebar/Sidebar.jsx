import { useState } from "react";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion, spring } from "framer-motion";
const Sidebar = () => {
  const [open, setOpened] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffenss: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffenss: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="flex flex-col items-center justify-center bg-white text-black"
    >
      <motion.div
        variants={variants}
        className="fixed top-0 left-0 bottom-0 w-96 bg-white"
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpened} />
    </motion.div>
  );
};
export default Sidebar;
