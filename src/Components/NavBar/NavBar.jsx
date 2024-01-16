import { motion } from "framer-motion";
import React from "react";
import Sidebar from "../sidebar/Sidebar";

const NavBar = () => {
  return (
    <div className="h-24">
      <Sidebar />
      <div className="max-w-6xl m-auto flex items-center justify-between h-full">
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold"
        >
          Nagarjun M
        </motion.span>
        <div className="flex gap-5">
          <a>
            <img src="instagram.png" alt="instagram" className="w-8" />
          </a>
          <a>
            <img src="github.png" alt="github" className="w-8" />
          </a>
          <a>
            <img src="linkedin.png" alt="linkedin" className="w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
