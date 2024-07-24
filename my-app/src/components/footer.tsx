import React from 'react'
import facebook from '@/assets/facebook_2504903.png'
import linkedin from '@/assets/linkedin_2504923.png'
import github from '@/assets/social_11024158.png'
import whatsapp from '@/assets/whatsapp_2504957.png'
import mail from '@/assets/gmail_5968534.png'
import telegram from '@/assets/telegram_2504941.png'
import Image from 'next/image'
import Friendsbutton from './friendsbutton'
import {motion} from 'framer-motion'
import Link from 'next/link'


const footer = () => {
    const svgvars = {
        initial : {
            scale:1
        },
        animate:{
            scale:1.2,
            transition:{
                duration:0.3
            }
        }
    }
  return (
    <div className='bg-primary-dark w-full flex justify-center items-center flex-col gap-y-4 '>
        <div className='md:text-4xl text-2xl  text-white w-full flex justify-center text-center '>
            <p>Let's Build Something <span className='text-primary-content'>Great</span>  Together!</p></div>
        <div className='md:text-2xl text-lg  text-center  text-white  flex  justify-center items-center w-full md:w-1/2'>Partner with a visionary developer to transform your ideas into stunning digital experiences. Let's create something extraordinary!</div>
        <Link href='/contact'><div><Friendsbutton value='Connect Now❤'></Friendsbutton></div></Link>
        
        <div className='flex gap-x-4 mb-4'>
          <motion.div variants={svgvars} initial='initial' whileHover='animate'><Link href='https://www.facebook.com/profile.php?id=100071642654808&mibextid=ZbWKwL'> <Image  src={facebook} alt='facebook' width={25} height={25}></Image></Link></motion.div> 
          <motion.div variants={svgvars} initial='initial' whileHover='animate'> <Link href='https://www.linkedin.com/in/muhammad-abdullah-7266a12b6/'> <Image src={linkedin} alt='linkedin' width={25} height={25}></Image></Link></motion.div> 
          <motion.div variants={svgvars} initial='initial' whileHover='animate'><Link href='https://wa.link/3xru00'>  <Image src={whatsapp} alt='whatsapp' width={25} height={25}></Image></Link></motion.div> 
          <motion.div variants={svgvars} initial='initial' whileHover='animate'><Link href='https://github.com/Abdullah-1121'>  <Image src={github} alt='github' width={25} height={25}></Image></Link></motion.div> 
          <motion.div variants={svgvars} initial='initial' whileHover='animate'> <Link href="mailto:muhammad11abdullah21@gmail.com"> <Image src={mail} alt='mail' width={25} height={25}></Image></Link></motion.div> 
          <motion.div variants={svgvars} initial='initial' whileHover='animate'> <Link href='https://t.me/AbD112156'> <Image src={telegram} alt='telegram' width={25} height={25}></Image></Link></motion.div> 
            

        
        </div>
        

    </div>
  )
}

export default footer