'use client'
import {motion , AnimatePresence , MotionConfig, animate, DragControls, delay} from 'framer-motion'
import React from 'react'
import LinkComp from '@/components/Linkcomp'
import { useState } from 'react'
import Image from 'next/image'
import del from '@/assets/delete_10027420.png'
import nav from '@/assets/align-right_10027523.png'
import Link from 'next/link'


const Nav = () => {
    const [isToggle,setisToggle] = useState(false);
    const toggle = () => {
       setisToggle(!isToggle)
    //    console.log(isToggle)
      };
      const menuVars = {
        initial:{
          scaleY:0,
          transition: {
            staggerChildren: 0.03,
            staggerDirection: -1,
           
          },
        },
        animate:{
          scaleY:1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.09,
            staggerDirection: 1,
            duration:0.5
          },
        },
        exit:{
          scaleY:0,
          transition:{
            delay:0.5,
            duration:0.5,
            ease:[0.22, 1, 0.36, 1]
          }
        }
      }
      const initMenu = {
      
      }
      const linkVars = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
      }
   
  return (
   
    <div className='flex  flex-col justify-between items-center  bg-primary-dark  '>
      <AnimatePresence>
     {!isToggle && <motion.div variants={initMenu} initial='initial' animate='animate' exit='exit' className=' w-full flex justify-stretch  '>
      <motion.div whileHover={{scale:1.2}} className='m-2 xs:m-4'>

      <Link href='/'><button className='xs:text-3xl text-xl font-bold xs:mx-4 mx-2 my-2 text-white '><span className='text-white '>Muhammad</span> <span className=' xs:text-3xl text-2xl text-primary-content'>Abdullah</span></button></Link>
      </motion.div>
        <motion.div whileHover={{scale:1.2}} transition={{duration:0.2}} whileTap={{scale:0.8}} className=' p-0 xs:my-4 my-3 ml-auto mr-2  text-white rounded-lg' onClick={toggle}>
            <Image alt='menu' src={nav} width={40} height={40}></Image>
        </motion.div>
      </motion.div>}
      </AnimatePresence>
      
      <AnimatePresence>
        
      { isToggle && <motion.div 
      variants={menuVars}
      initial='initial'
      animate='animate'
      exit='exit'
   
       className='flex  flex-col  bg-primary-content text-primary-dark w-full fixed left-0 top-0 h-screen z-50  origin-top justify-stretch items-center'>
        
          <Image alt='close' src={del} width={40} height={40} className='   rounded-lg overflow-hidden m-2  ml-auto mx-6 hover:scale-125' onClick={toggle}></Image>
          
        <div className=' h-screen flex flex-col justify-evenly'>
       <motion.div variants={linkVars} onClick={toggle}><LinkComp href='/' value='Home' ></LinkComp></motion.div>
       <motion.div variants={linkVars} onClick={toggle} > <LinkComp href='about' value='About me' ></LinkComp></motion.div>
       <motion.div variants={linkVars} onClick={toggle} > <LinkComp href='projects' value='Projects' ></LinkComp></motion.div>
       <motion.div variants={linkVars} onClick={toggle} > <LinkComp href='contact' value='Contact me' ></LinkComp></motion.div>
       </div>
        </motion.div>}
       
        </AnimatePresence>
      
        
       
    </div>
  )
}
  


export default Nav