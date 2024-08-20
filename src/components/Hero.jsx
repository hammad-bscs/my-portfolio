import React from 'react'
import profilepic from '../assets/hammad-profile.png'
import { motion } from "framer-motion"

const container = (delay) => (
  {
    hidden: {x:-100, opacity: 0 },
    visible: {x:0 , opacity:1 ,
      transition: {duration:1.5 , delay}
    }
  });
  const container2 = (delay) => (
    {
      hidden: {x:100, opacity: 0 },
      visible: {x:0 , opacity:1 ,
        transition: {duration:1.5 , delay}
      }
    });

const Hero = () => {

  

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-20">
      <div className="flex items-center">
        <div className="w-full lg:w-1/2 text-left">
          <motion.h1  
          variants={container(0)}
          initial = "hidden"
          animate ="visible"
          className='text-4xl font-thin tracking-tight lg:text-6xl'>Hammad Ahmed</motion.h1>
          <motion.span
         variants={container(0.5)}
         initial = "hidden"
         animate ="visible"  className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl 
            tracking-tight text-transparent lg:text-3xl'>
            Full stack Developer
          </motion.span>
          <motion.p 
           variants={container(1)}
           initial = "hidden"
           animate ="visible" 
          className="mt-4 text-lg lg:text-xl text-neutral-100">
            I'm a passionate Full stack Developer with a computer science degree. I have used the MERN stack and blockchain technology to solve problems.
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
          <motion.img 
          variants={container2(2)}
          initial = "hidden"
          animate ="visible" 
          src={profilepic} alt="hammadpic" className=" w-48 h-48 lg:w-auto lg:h-auto max-w-full lg:max-h-80 lg:max-w-80 object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Hero
