import { motion } from "framer-motion";
// import { useState } from "react";
import {
  PiGithubLogoBold,
  PiInstagramLogoBold,
  PiLinkedinLogoBold,
} from "react-icons/pi";

export const Welcome = ({ handleclick }: any) => {
  return (
    <div
      className={` h-[100%] w-[100%] bg-[#495057] flex flex-col justify-center items-center font-[sans-serif] `}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className=" flex gap-2 mb-4"
      >
        <a target="_blank" href="#">
          <PiLinkedinLogoBold size={40} />
        </a>
        <a target="_blank" href="#">
          <PiGithubLogoBold size={40} />
        </a>
        <a target="_blank" href="#">
          <PiInstagramLogoBold size={40} />
        </a>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-2xl font-extrabold text-center leading-3"
      >
        Welcome To My <br />
        <span className="text-[#212529] text-6xl sm:text-8xl">Portfolio</span>
      </motion.h1>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="bg-white text-[#212529] font-bold px-5 py-2 mt-20 rounded-md"
        onClick={handleclick}
      >
        View Profile
      </motion.button>
    </div>
  );
};
