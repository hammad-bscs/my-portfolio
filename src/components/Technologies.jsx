import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { SiDocker } from 'react-icons/si';
import { SiSolidity } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiEthereum } from 'react-icons/si';
import { SiAmazon } from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

import { animate, motion } from 'framer-motion';

const iconfloater =(duration) =>
({
  initial: {y:-10},
  animate: {
    y: [10,-10],
    transition: {
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})
  
 
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">

        
        <motion.div
         variants={iconfloater(2.5)}
         initial="initial"
         animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className='text-4xl text-cyan-300' />
        </motion.div>
        <motion.div
         variants={iconfloater(2.5)}
         initial="initial"
         animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb  className='text-4xl text-green-500' />
          </motion.div>
          <motion.div
         variants={iconfloater(2.5)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className='text-4xl text-green-500' />
          </motion.div>
        <motion.div
         variants={iconfloater(2.5)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDocker className='text-4xl text-blue-500' />
          </motion.div>
        <motion.div
         variants={iconfloater(2.5)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSolidity className='text-4xl text-gray-400' />
          </motion.div>
       
        <motion.div
         variants={iconfloater(2.5)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiEthereum className='text-4xl text-purple-500' />
          </motion.div>
        <motion.div
         variants={iconfloater(2.5)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAws className='text-4xl text-neutral-100' />
          </motion.div>
     
        
        
      </div>
    </div>
  )
}

export default Technologies;
