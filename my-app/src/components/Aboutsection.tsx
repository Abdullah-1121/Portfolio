'use client'
import React from 'react'
import Image from 'next/image'
import profile from '@/assets/Screenshot_20230225-163154_1 (1).jpg'
import Footer from './footer'


const Aboutsection = () => {
  return (
    <>
    <div className='flex min-h-screen w-full bg-primary-dark flex-col lg:flex-row'>
    <div className='flex w-full flex-col md:flex-row '>
      <div className='w-full flex justify-center  p-4 flex-col items-center'>
        <Image
          src={profile}
          alt="profile"
          className='my-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full object-cover'
        />
        <div className='text-white text-center'>
          <p className='text-2xl'>
            Full Stack <span className='text-3xl text-primary-content'>Web</span> developer
          </p>
        </div>
        <div className='text-md text-white text-center'>
          <p>Specialized in NEXT and REACT</p>
        </div>
      </div>
    </div>
    <div className='w-full flex flex-col  text-white p-4'>
    {/* <h2 className="text-4xl font-bold mb-4">About Me</h2> */}
      <p className="text-lg mb-4">
        Hello! I'm <span className='text-blue-300'>Muhammad Abdullah</span>, a passionate web developer based in Pakistan. With almost a year of experience in the web development field, I've honed my skills through self-learning and hands-on projects. I am currently studying at PIAIC (Presidential Initiative for Artificial Intelligence & Computing), a prestigious program dedicated to nurturing the next generation of tech professionals.
      </p>
      <p className="text-md mb-4">
        My journey in the tech world has been driven by a deep desire to help people through innovative solutions. I have a diverse stack of technologies at my disposal, including Next.js, React, TypeScript, JavaScript, Tailwind CSS, Next.js backend and APIs, MongoDB database, Redux, Sanity (CMS), and Python. I am continually expanding my expertise to keep up with the latest industry trends and advancements.
      </p>
      <p className="text-md mb-4">
        Currently, I am diving into the fascinating world of Artificial Intelligence, one of humanity's greatest inventions. I believe AI holds the potential to revolutionize countless industries, and I'm excited to be a part of this transformative journey. My goal is to integrate AI functionalities into web applications, enhancing their capabilities and providing smarter solutions for users.
      </p>
      <p className="text-md mb-4">
        As a developer, I strive to create impactful and efficient web applications that meet the needs of my clients. Whether it's building dynamic websites, optimizing user experiences, or integrating advanced AI functionalities, I am committed to delivering top-notch solutions.
      </p>
      <p className="text-sm mb-4">
        Outside of coding, I enjoy exploring new technologies, learning about the latest advancements in AI, and contributing to the tech community. I am always open to new opportunities and collaborations that allow me to leverage my skills to make a positive impact.
      </p>
      <p className="text-sm mb-4">
        If you're looking for a dedicated and innovative web developer who is ready to take on exciting challenges, let's connect and bring your ideas to life!
      </p>
    </div>
  </div>
  <div className=' bg-primary-dark p-4'>
  <Footer ></Footer>
  </div>
  </>
  )  
}

export default Aboutsection