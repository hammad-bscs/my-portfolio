import React from 'react';
import aboutImg from '../assets/about.jpg';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className='text-neutral-500'>ME</span>
      </h1>

      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <motion.div 
         whileInView={{opacity:1 , x:0}}
         initial= {{x:-100, opacity: 0 }}
         animate= {{x:0 , opacity:1}} 
         transition= {{duration:1.5 , delay:0.5}}
         
        className="w-full md:w-1/2 md:p-8 flex items-center justify-center">
          <img className='rounded-2xl' src={aboutImg} alt="about" />
        </motion.div>

        {/* Text Section */}
        <motion.div
         whileInView={{opacity:1 , x:0}}
         initial= {{x:100, opacity: 0 }}
         animate= {{x:0 , opacity:1}} 
         transition= {{duration:1.5 , delay:0.5}}
        className="w-full md:w-1/2 md:p-8 flex items-center justify-center md:justify-center">
          <p className='my-2 max-w-xl py-6 text-center md:text-right'>
            Hi, this is Hamad. Here is some text about me...
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
