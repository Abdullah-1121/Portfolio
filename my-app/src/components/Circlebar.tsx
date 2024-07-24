import { motion } from 'framer-motion';
import Image from 'next/image';

const CircularProgressBar = ({ logo, percentage ,color}:{logo:any,percentage:number,color:string}) => {
  const circleRadius = 50;
  const circleCircumference = 2 * Math.PI * circleRadius;
  

  return (
    <div className="mb-8 flex flex-col items-center">
      <svg className="rotate-[-90deg]" width="120" height="120">
        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          stroke="black"
          strokeWidth="10"
          fill="transparent"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={circleRadius}
          stroke='cyan'
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circleCircumference}
          strokeDashoffset={circleCircumference}
          initial={{ strokeDashoffset: circleCircumference }}
          whileInView={{ strokeDashoffset: circleCircumference - (circleCircumference * percentage) / 100 }}
          transition={{ duration: 1 }}
        />
      </svg>
      <div className="text-white mt-4">
        <Image src={logo} alt='logo' width={40} height={40}></Image>
        
      </div>
    </div>
  );
};

export default CircularProgressBar;
