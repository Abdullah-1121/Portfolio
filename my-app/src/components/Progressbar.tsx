import { motion } from 'framer-motion';

const ProgressBar = ({ skill, percentage }:{skill:string,percentage:number}) => {
  return (
    <div className="mb-4  w-full flex">
        <div className='md:w-1/2 w-full  mx-auto'>
      <div className="text-white mb-2 ">{skill}</div>
      <div className="w-full bg-gray-300 rounded-full h-4 ">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
          className="h-4 bg-blue-600 rounded-full"
        />
      </div>
      </div>
    </div>
  );
};

export default ProgressBar;
