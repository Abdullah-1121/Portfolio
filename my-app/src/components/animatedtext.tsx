// import React from 'react'
// import {motion} from 'framer-motion'

// const animatedtext = ({Text}:{Text:string}) => {
//     const defaultAnimations = {
//         hidden:{
//             opacity:0,
//             y:20
//         }
//         ,
//         visible:{
//             opacity:1,
//             y:0
//         }
//     }
//   return (
//     <p><span className='sr-only'>{Text}</span>
//     <motion.span aria-hidden initial='hidden' animate='visible' transition={{staggerChildren:0.1}}>{Text.split("").map((char)=>(<motion.span className='inline-block' variants={defaultAnimations} key={char} >
//         {char === " " ? "\u00A0" : char}
//         </motion.span>))}</motion.span>
//     </p>
//   )
// }

// export default animatedtext
import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ Text }: { Text: string }) => {
  const textAnimation = {
    hidden: { opacity: 0, y: 20 }, // Start lower
    visible: { opacity: 1, y: 0 }, // Move up smoothly
  };

  return (
    <p>
      <span className="sr-only">{Text}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation
        variants={textAnimation}
        className="inline-block"
      >
        {Text}
      </motion.span>
    </p>
  );
};

export default AnimatedText;
