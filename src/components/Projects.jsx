import React from 'react'

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">

        <div className="my-20 text-center text-4xl">Projects</div>
        <div className="mb-8 flex flex-wrap lg:justify-center">

            <div className="w-full max-w-xl lg:w-3/4">
            <br />
            <h6 className='mb-2 font-semibold' >Landblock Blockchain based Land registration system</h6>
            <p className='mb-4 text-neutral-400'> I developed this project utilizing the Ethereum
blockchain and React for frontend. By harnessing Ethereum’s smart contract technology and tokenization, I’ve
established a secure and transparent platform for recording and transferring property ownership. This project offering
a decentralized solution to enhance data integrity and trust in land management. </p>

<h6 className='font-semibold'>Tech used:</h6>
<span className='mr-2 mt-4 rounded px-2 font-medium text-purple-900'> React Node.js Ethereum Solidity Express JavaScript</span>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
            <br />
            <h6 className='mb-2 font-semibold' >Cloth Donation Website (MERN) project.</h6>
            <p className='mb-4 text-neutral-400'> For my Cloth Donation Website project, I utilized the MERN
(MongoDB, Express.js, React, Node.js) stack to create a user- friendly platform. This website enables clothing
donations to those in need with a dynamic React front-end and efficient back-end powered by Node.js, Express.js,
and MongoDB. It offers a seamless user experience and encourages clothing donations for a noble cause.
 </p>

<h6 className='font-semibold'>Tech used:</h6>
<span className='mr-2 mt-4 rounded px-2 font-medium text-purple-900'> React Node.js Express Mongodb JavaScript</span>
            </div>

          
            <div className="w-full max-w-xl lg:w-3/4">
            <br />
            <h6 className='mb-2 font-semibold' >Food Hub - cooking website</h6>
            <p className='mb-4 text-neutral-400'>A platform where you can learn how to cook delicious foods and upload recipe.
Designed a responsive, dynamic website using Laravel, PHP, jQuery, JavaScript, HTML, CSS, Bootstrap, and MySQL
database. </p>

<h6 className='font-semibold'>Tech used:</h6>
<span className='mr-2 mt-4 rounded px-2 font-medium text-purple-900'> Laravel PHP jQuery JavaScript HTML CSS Bootstrap MySql</span>
            </div>

            
            <div className="w-full max-w-xl lg:w-3/4">
            <br />
            <h6 className='mb-2 font-semibold' >Cloth recommendation system</h6>
            <p className='mb-4 text-neutral-400'> Developed a clothing recommendation system leveraging a pre- trained CNN
model, VGG16. By extracting features from clothing images, the system identifies similarities between items. This
approach enhances personalized recommendations, utilizing deep learning to analyze visual attributes and enrich the
user experience with tailored suggestions for fashion choices </p>

<h6 className='font-semibold'>Tech used:</h6>
<span className='mr-2 mt-4 rounded px-2 font-medium text-purple-900'> React Node.js Python CNN JavaScript</span>
            </div>
        </div>
    </div>
  )
} 

export default Projects
