import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


import { motion } from "framer-motion";

import { fadeIn } from "../variants";
const Contact = () => {
  const [isSubmitting,setSubmit]=useState(false);
  const [isError,setError]=useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('start');
  const [emailError, setEmailError] = useState('start');

  const handleNameChange = (event) => {
      const value = event.target.value;
      setName(value);

      if (!value) {
          setNameError('Name is required');
      } else if(value.length<3) {
        setNameError('Name should be greater than three characters')
      }else{
          setNameError('');
      }
  };

  const handleEmailChange = (event) => {
      const value = event.target.value;
      setEmail(value);

      if (!value) {
          setEmailError('Email is required');
      } else if (!/\S+@\S+\.\S+/.test(value)) {
          setEmailError('Invalid email format');
      } else {
          setEmailError('');
      }
  };

  const formRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    if(nameError===''& emailError===''){
    setSubmit(true);
    emailjs.sendForm('service_9wn9fbl', 'template_xxpewbs', formRef.current, 'bWopuTulUs9CFc60N')
      .then((result) => {
        alert('Email Sent');
      }, (error) => {
        alert('error');
      });
    }
    else{
      setError('true')
      if(nameError==='start')
      setNameError('Name should not be Empty');
      if(emailError==='start'){
      setEmailError('Email should not be Empty');
      }

      
    }
  };
  return ( 
    <section className="lg:section py-16" id="info">
      <div className='container mx-auto flex flex-col items-center lg:flex-row'>

        <motion.div variants={fadeIn('right',0.4)} 
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.4}}
        className="flex-1 flex flex-col items-center">
          <h4 className="text-xl uppercase text-accent font-medium mb-0 tracking-wide">Get in touch</h4>
          <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 ">
            lets work <br/> together!</h2>
        </motion.div>

        <motion.form
        ref={formRef}
        variants={fadeIn('left',0.3)} 
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}className="flex-1 border rounded-xl gap-y-6 pb-24 p-6 items-start">
          <input className="bg-slate-300/40 border-b py-3 w-full
           focus:border-gray-200 transition-all" 
           type="text"
           name="from_name"
          placeholder='Your Name'
          value={name}
          onChange={handleNameChange}
          />
          <input className="bg-slate-300/40 border-b py-3 w-full
           focus:border-gray-200 transition-all" 
           type="text"
           name="from_email"
          placeholder='Your email' 
          value={email}
          onChange={handleEmailChange}
          required
          />
          <textarea className="bg-slate-300/40 border-b py-3 w-full
           focus:border-gray-200 transition-all" 
           name="message"
          placeholder='Your message' required/>
          <button className="btn btn-lg" onClick={sendEmail} disabled={isSubmitting&&nameError===''&&emailError===''}>
            {isSubmitting ? 'Accomplished' : 'SeNd MeSSage'}
            </button>
            {nameError && <div className=" text-white">{nameError==='start'&&!isError? null : nameError}</div>}
            {emailError && <div className=" text-white">{emailError==='start'&&!isError? null : emailError}</div>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
