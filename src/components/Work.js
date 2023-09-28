import React from "react";
import One from "./Skills/One";
import Two from "./Skills/Two";
import Image from "../assets/preview.png";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";
const Work = () => {
  return <div className="section lg:mx-16 flex justify-between flex-col lg:flex-row" id="skills">
    <One className=''/>
    <motion.img
     variants={fadeIn('up',0.3)} 
     initial='hidden'
     whileInView={'show'}
     viewport={{once:false,amount:0.6}}
      src={Image}
      alt=" My skills"
      className="hidden lg:block w-[450px] h-[450px] object-cover"
    />
    <Two/>

  </div>;
};

export default Work;
