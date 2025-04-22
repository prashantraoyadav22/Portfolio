import React from "react";
import { HiOutlineDownload, HiOutlineArrowRight } from "react-icons/hi";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "../common/Button";

const Overview = () => {
    return(
        <>
        <motion.div
        initial={{ opacity: 0 }} // start hidden and slightly lower
        animate={{ opacity: 1 }} // move up and show
        transition={{ delay: 1, duration: 1.5, ease: "linear" }} // 1.5s delay
        className="flex flex-col items-center justify-center grow mt-20 text-center bg-[url('/grid.svg')] bg-cover transition-all duration-1500 ease-in"
      >
        <p className="text-sm md:text-base text-gray-400 font-semibold uppercase tracking-widest mb-4">
          Based in Gurugram, India
        </p>
        <h1 className="text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400 mb-6">
          Software Developer
        </h1>
        <p className="text-md md:text-lg text-gray-400 max-w-2xl mb-10">
          Hi, I'm Prashant Yadav. A dedicated software professional exploring
          backend technologies to build robust, full-stack websites.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <Button
            text="See My Projects"
            icon={<HiOutlineArrowRight />}
            variant="filled"
            color="orange-400"
          />
          <Button
            text="Download Resume"
            icon={<HiOutlineDownload />}
            variant="outlined"
            color="orange-400"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }} // start hidden and slightly lower
        animate={{ opacity: 1, y: 0 }} // move up and show
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="flex items-center justify-center mb-2 gap-3 "
      >
        <div className="custom-line w-38 bg-orange-300 "></div>
        <a
          href="mailto:prashantraoyadav22@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:text-orange-400 transition-all"
        >
          <FaEnvelope
            size={40}
            className="text-white  bg-transparent p-2 text-3xl rounded hover:text-orange-400 transition-all"
          />
        </a>
        <a
          href="https://github.com/prashantraoyadav22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={40}
            className="text-white bg-transparent p-2 text-3xl rounded-full hover:text-orange-400 transition-all"
          />
        </a>
        <a
          href="https://linkedin.com/in/prashant-yadav-coc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={40}
            className="text-white bg-transparent p-2 text-3xl rounded hover:text-orange-400 transition-all"
          />
        </a>
        <div className="custom-line w-38 bg-orange-300"></div>
      </motion.div>
        </>
    );
};
export default Overview;