'use client'
import React from 'react'
import Image from 'next/image'
import profile from '@/assets/1723629190337 (1).png'
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
          className='my-4 w-40 h-40 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full object-cover'
        />
        <div className='text-white text-center'>
          <p className='text-2xl'>
            <span className='text-3xl text-primary-content'>Agentic AI</span> Developer and Engineer
          </p>
        </div>
        <div className='text-md text-white text-center'>
          <p>Specialized in creating <span className='text-xl text-primary-content'>Agentic and Autonomous Systems</span></p>
        </div>
      </div>
    </div>
    <div className='w-full flex flex-col  text-white p-4'>
    {/* <h2 className="text-4xl font-bold mb-4">About Me</h2> */}
      <p className="text-lg mb-4">
        Hello! I am  <span className='text-blue-300'>Muhammad Abdullah</span>, a passionate Agentic Ai developer  based in Pakistan, I have honed my skills through self-learning and hands-on projects. I am currently studying at PIAIC (Presidential Initiative for Artificial Intelligence & Computing), a prestigious program dedicated to nurturing the next generation of tech professionals.
      </p>
      <p className="text-md mb-4">
        My journey in the tech world has been driven by a deep desire to help people through innovative and Autonoumus solutions . I have a diverse stack of technologies at my disposal, including Agentic Frameworks like LangGraph , Lancgchain , CrewAi and then
        Fast API for building APIs and On the frontend , Next js , React , Streamlit etc. I am continually expanding my expertise to keep up with the latest industry trends and advancements.
      </p>
      <p className="text-md mb-4">
        Currently, I am diving into the fascinating world of Artificial Intelligence especially in AI Agents ,The Next Generation of AI, one of humanity&apos;s greatest inventions. I believe AI holds the potential to revolutionize countless industries, and I am excited to be a part of this transformative journey. My goal is to integrate AI functionalities into web applications, enhancing their capabilities and providing smarter solutions for users.
      </p>
      <p className="text-sm mb-4">
        Outside of coding, I enjoy exploring new technologies, learning about the latest advancements in AI, and contributing to the tech community. I am always open to new opportunities and collaborations that allow me to leverage my skills to make a positive impact.
      </p>
      <p className="text-sm mb-4">
        If you are looking to find a solution for your business or you want to create a system that works for you , feel free to contact me.
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