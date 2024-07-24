'use client'
import React from 'react'
import Progressbar from '@/components/Progressbar'
import CircularProgressBar from '@/components/Circlebar'
import reactLogo from '@/assets/react.svg'
import nextLogo from '@/assets/nextjs.svg'
import pythonLogo from '@/assets/python.svg'
import tailwindLogo from '@/assets/tailwind-css.svg'
import mongoLogo from '@/assets/file-type-mongo.svg'
import typeLogo from '@/assets/typescript-icon.svg'
import framerLogo from '@/assets/framer (1).svg'
import apiLogo from '@/assets/api (1).svg'
import redux from '@/assets/redux-original.svg'
import sanity from '@/assets/sanity.svg'
import Footer from '@/components/footer'

const page = () => {
  const webStack = [
    { skill: 'Next.js', percentage: 90 },
    { skill: 'React', percentage: 80 },
    { skill: 'TypeScript', percentage: 90 },
    { skill: 'Tailwind CSS', percentage: 85 },
    { skill: 'MongoDB', percentage: 70 },
    { skill: 'Responsive Design', percentage: 90 },
  ];
  const otherSkills = [
    { logo: redux, percentage: 60 },
    { logo: sanity, percentage: 75 },
    { logo: framerLogo, percentage: 90 },
    { logo: pythonLogo, percentage: 85 },
    { logo: apiLogo, percentage: 70 },
    
  ]
  return (
    <>
    <div className='min-h-screen bg-primary-dark'>
        <div className="p-4 flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-white mb-8  text-center">Web Stack and Skills</h2>
      <div className='flex flex-col '>
      <div className='grid grid-flow-row md:grid-cols-2 grid-cols-1'>
      {webStack.map((skillData, index) => (
        <Progressbar
          key={index}
          skill={skillData.skill}
          percentage={skillData.percentage}
        />
      ))}
      </div>
      <h2 className="text-4xl font-bold text-white mb-8  text-center">Others</h2>
      <div className='grid grid-flow-row md:grid-cols-3 grid-cols-2'>
      {otherSkills.map((skillData, index) => (
        <CircularProgressBar
          key={index}
          logo={skillData.logo.src}
          percentage={skillData.percentage}
          color='#4FA8C8'
        />
      ))}
      </div>
      </div>
    </div>
      
    </div>
    <Footer></Footer>
    </>
  )
}

export default page