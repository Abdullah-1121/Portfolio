import React from 'react'
import {motion} from 'framer-motion'

const animatedtext = ({Text}:{Text:string}) => {
    const defaultAnimations = {
        hidden:{
            opacity:0,
            y:20
        }
        ,
        visible:{
            opacity:1,
            y:0
        }
    }
  return (
    <p><span className='sr-only'>{Text}</span>
    <motion.span aria-hidden initial='hidden' animate='visible' transition={{staggerChildren:0.1}}>{Text.split("").map((char)=>(<motion.span className='inline-block' variants={defaultAnimations} key={char} >
        {char === " " ? "\u00A0" : char}
        </motion.span>))}</motion.span>
    </p>
  )
}

export default animatedtext