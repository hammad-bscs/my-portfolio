import React from 'react'
import { motion } from 'framer-motion'
const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1

        whileInView={{opacity:1 , y: 0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
         className='my-20 text-center text-4xl'>Experience</motion.h1>
      
      <div className='mb-8 flex flex-wrap lg:justify-center'>
         <motion.div
         whileInView={{opacity:1 , x: 0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:0.5}}
         className="w-full lg:w-1/4">
         <p className="mb-2 text-sm text-neutral-400">June 2023 - Aug 2023</p>
         </motion.div>
         <motion.div
         whileInView={{opacity:1 , x: 0}}
         initial={{opacity:0, x:100}}
         transition={{duration:0.5}}>
         <div className="w-full max-w-xl lg:w-3/4">
         <h6 className="mb-6 font-semibold">Frontend Web developer - <span className='text-sm text-purple-50'>
              RootSolution inc
            </span></h6>
            <p className='mb-2 text-neutral-50 '> • Used Liquid, HTML, CSS, and JavaScript to create custom Shopify themes and templates.
 <br />• Develop and maintain custom Shopify themes.
<br />• Troubleshoot and debug issues with Shopify themes and provide timely solutions</p>
<span className='mr-2 mt-4 rounded px-2 font-medium text-purple-900'> Liquid HTML CSS JavaScript</span>
         </div>    
         </motion.div>
      </div>
    </div>
  )
}

export default Experience
