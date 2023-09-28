import React from 'react';
import './SkillCard.css'; // Add your own CSS for styling
import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
const One = () => {
  return (
    <motion.div
    variants={fadeIn('left',0.3)} 
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.6}}
     className="w-[450px] h-[450px] group relative p-4 rounded-lg overflow-hidden transition-colors duration-300 border-4 border-transparent hover:border-blue-500">
    <div 
    className="backdrop-brightness-50 hover:bg-blend-darken
     bg-gradient-to-r rounded-xl from-indigo-500/50 via-purple-500/50 to-pink-500/50 
    p-[20px] shadow-lg">
      <h2 className="skill-title text-center">Front End</h2>
      <ul className="skill-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Angular.JS</li>
        <li>Photoshop</li>
        <li>Finge</li>
        <li>JQuery </li>
        <li>TypeScript</li>
      </ul>
    </div>
    </motion.div>
  );
};

export default One;
