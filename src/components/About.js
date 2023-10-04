import React from "react";
import Image from "../assets/profile.png";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  return (
    <section className="section flex flex-col gap-y-10 lg:flex-row" id="about">
      <motion.div
      variants={fadeIn('left',0.3)} 
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.6}}
       className="h-[350px] w-[350px] lg:h-[450px] lg:w-[450px] mx-auto
        bg-gradient-to-b from-sky-50 to-transparent 
        rounded-full items-center overflow-hidden">
        <img src={Image} alt=''/>
        </motion.div>
      <motion.div 
      variants={fadeIn('right',0.3)} 
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.6}}
      className='container w-auto lg:w-[550px] mx-auto' >
        <h2 className=" h2 text-gradient" >
          ABOUT ME
        </h2>
        <h3 className="h3 ">
        I am a UI/UX developer with
        <span className=" font-tertiary text-gradient"> { InView ?
          <CountUp start={0} end={8} duration={5}/> : null }
            </span> 
           years of experience in the software industry. I have a strong understanding of both the 
          <span className=" font-tertiary text-gradient"> Front end </span> and <span className=" font-tertiary text-gradient"> Back-end </span>back-end aspects of web development.
          I am proficient in a variety of programming languages and technologies
        </h3><p className="h3">
        In my previous role, I was responsible for the <span className=" font-tertiary text-gradient"> design </span> and 
        <span className=" font-tertiary text-gradient"> development </span> of a large-scale web application. 
        
        I worked closely with a team of engineers to design, implement, and test new features.
         
        I am a highly motivated and results-oriented individual. I am also a
         <span className=" font-tertiary text-gradient"> team player </span>and I am always willing to go the extra mile
          <span className=" font-tertiary text-gradient"> like this</span> .
          I am confident that I can make a significant contribution to your team.
  </p>
      </motion.div>
    </section>
  );
};

export default About;
