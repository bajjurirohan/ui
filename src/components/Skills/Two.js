import React from 'react';
import './SkillCard.css'; // Add your own CSS for styling
import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
const Two = () => {
  return (
    <motion.div 
    variants={fadeIn('right',0.3)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.6}}
    className="w-[450px] h-[450px] group relative p-4 rounded-lg overflow-hidden transition-colors duration-300 border-4 border-transparent hover:border-blue-500">
    <div 
    className="backdrop-brightness-50 hover:bg-blend-darken
     bg-gradient-to-r rounded-xl from-indigo-500/50 via-purple-500/50 to-pink-500/50 
    p-[20px] shadow-lg">
      <h2 className="skill-title text-center">Back End</h2>
      <ul className="skill-list">
        <li>NodeJS</li>
        <li>Java</li>
        <li>Express</li>
        <li>Spring MVC</li>
        <li>MySQL</li>
        <li>MongoDB </li>
        <li>JDBC</li>
        <li>Hibernate</li>
      </ul>
    </div>
    </motion.div>
  );
};

export default Two;
