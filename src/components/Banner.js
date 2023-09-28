import React from "react";

//import Image from "../assets/profile.png";

import { FaGithub } from "react-icons/fa";

import { AiFillLinkedin } from "react-icons/ai";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import Cup from "./Decor/Cup";
const Banner = () => {
  return (
    <section
      id="main"
      className="section flex flex-col items-center gap-y-[90px]"
    >
      <div
        className="flex flex-col gap-y-8 lg:flex-row
        lg:items-center lg:gap-x-2 container mx-auto"
      >
        <div
          className="flex-1 text-center font-secondary
        lg:text-left"
        >
          <motion.h1
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[65px] font-bold leading-[0.8]
        lg:text-[65px] lg:mb-5"
          >
            ROHAN <span>BAJJURI</span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-6 text-2xl lg:text-[50px] font-secondary
        font-semibold uppercase leading-[1] lg:my-7"
          >
            <span className="mr-4">I am a </span>
            <TypeAnimation
              sequence={[
                "",
                1000,
                "UI Developer",
                3000,
                "Court-Side Coder",
                2000,
              ]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
            <p className="mb-8 text-sm max-w-xl mx-auto lg:mx-0 lg:text-lg">
              "I orchestrate the symphony of digital experiences, seamlessly
              harmonizing the front-end's visual sonnets with the back-end's
              intricate mechanics, crafting a holistic digital world."
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Cup className="h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] mx-auto bg-white rounded-full flex items-center justify-center" />
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-x-[150px] gap-10 mx-auto">
      <div
        className="flex text-3xl gap-x-10 lg:gap-x-[150px] max-x-max mx-auto
        lg:mx-0 lg:text-5xl"
      >
        <a href="https://www.linkedin.com/in/rohan-baj-626798292/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/bajjurirohan" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <button className="btn h-16 w-40" onClick={() => window.open('/rohan_ui.pdf')} > ResuMe</button>
      </div>
    </section>
  );
};

export default Banner;
