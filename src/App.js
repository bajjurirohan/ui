import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import { useState, useEffect } from 'react';
import Hey from './components/Decor/Hey';

// import { motion } from "framer-motion";

// import { fadeIn } from "./variants";
const App = () => {
  const [waitTime, setTime] = useState(false);
  useEffect(() => {
    // Wait for 1 second after the component mounts
    const timer = setTimeout(() => {
    setTime(true);
    }, 3500);
    return () => clearTimeout(timer);
  },[]);

  return (
    <div>
      {waitTime ?
    <div 
    // variants={fadeIn('up',0.6)} 
    // whileInView={'show'}
    // initial='hidden'
    // viewport={{once:false,amount:0.7}}
    className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <Contact />
    </div>
    :
    <Hey className='bg-site w-screen h-screen flex items-center justify-center'/>
      }
    </div>
  );
};

export default App;
