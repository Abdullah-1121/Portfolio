import { motion } from "framer-motion";
import { Logos } from "@/lib/logos";
import {TypewriterEffect} from '@/components/ui/typewriter'
import {ContainerScroll} from '@/components/ui/scrollcard'
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dcard";
const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adjust the stagger duration as needed
        staggerDirection:-1,
        duration:0.9
        
      },
    },
  };
  const words = [
    { text: 'Technologies', className: 'text-blue-900' },
    { text: 'We ', className: 'text-black' },
    { text: 'Work', className: 'text-black' },
    { text: 'On', className: 'text-black' }
  ];

const SkillSection = () => {
    
  return (
    <div className="bg-primary-dark flex justify-center items-start">
     
   <CardContainer className='bg-white  rounded-xl   md:h-[300px] h-auto w-full md:w-3/4 mx-4 border-2 border-primary-dark shadow-xl'>
    <CardBody className='bg-white h-full flex justify-center rounded-xl items-center flex-wrap w-full relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] '>
      <CardItem className="flex justify-center bg-white w-full" > <TypewriterEffect words={words} className="mx-4 my-4 md:text-5xl  sm:text-4xl text-3xl"></TypewriterEffect></CardItem>
      <CardItem translateZ="50" className="bg-white p-2 m-2 flex  rounded-xl hover:shadow-xl flex-wrap justify-center items-center">{Logos.map((logo, index) => (
         <motion.div key={index} variants={containerVariants} initial = 'initial' whileInView = 'animate'>
         <motion.div
            
            className="w-20 h-20 m-2 flex justify-center items-center rounded-full "
            
           
          >
            <img src={logo.src} alt={`Logo ${index}`} className="w-12 h-12 md:w-32 md:h-32 object-contain" />
          </motion.div>
          </motion.div>
        ))}</CardItem>
    </CardBody>
   </CardContainer>
      </div>
     

   
  );
};

export default SkillSection;