import Link from "next/link";
import React from 'react'
import {motion} from 'framer-motion'

interface LinkComponentProps {
  href: string;
  value: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ href, value }) => {
  return (
    <motion.div whileHover={{scale:0.9}}>
    <Link href={href} className=" text-4xl xs:text-5xl sm:text-6xl md:text-7xl    text-primary-dark p-4 m-2 hover:text-green-300">{value}</Link>
    </motion.div>
  );
};

export default LinkComponent;