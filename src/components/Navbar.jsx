import React from 'react'
import logo from '../assets/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
 

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
    <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="logo" />
    </div>
    <div className='m-8 flex items-center px-2'>
      <a className="px-2" href="https://github.com/hammad-bscs"><FaGithub/></a>
    <a className="px-2" href="https://www.instagram.com/i._.maadi/"> <FaInstagram/></a>
    
     <a  className="px-2" href="https://www.linkedin.com/in/hammad-ahmed-533266240/"><FaLinkedin/></a>
    
    </div>

    </nav>
  )
}

export default Navbar
