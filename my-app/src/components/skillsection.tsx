import { motion } from "framer-motion";
import { Logos } from "@/lib/logos";
import {TypewriterEffect} from '@/components/ui/typewriter'
import {ContainerScroll} from '@/components/ui/scrollcard'
import { BackgroundGradient } from "./ui/projectcard";
import Image from "next/image";
import Link from "next/link";
import img from '@/assets/testpic.jpg'
import agenticrag from "@/assets/Agentic-RAG-Banner.png"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dcard";
import AnimatedText from "./animatedtext";
import browsing from '@/assets/browsing_agent.jpg';
import travel from '@/assets/travelagent.jpeg';

const words = [
  { text: 'Check', className: 'text-white' },
  { text: 'out ', className: 'text-white' },
  { text: 'my', className: 'text-white' },
  { text: 'latest', className: 'text-white' },
  { text: 'Work', className: 'text-primary-content' }
];
const Card = ({ img, title, description }: { img: any; title: string; description: string }) => {
  return (
    <Link href={"/projects"} >
    <div className="rounded-lg p-4 shadow-md bg-white dark:bg-zinc-900 max-w-xs sm:max-w-sm mx-auto hover:bg-gray-100">
  {/* Image Container */}
  <div className="w-full h-48 relative">
    <Image
      src={img}
      alt={title}
      fill
      className="object-contain"
    />
  </div>

  <p className="text-sm sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200 text-center">
    {title}
  </p>
  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 text-center">
    {description}
  </p>
  <div className="flex justify-center">
    <button className="rounded-full px-3 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 hover:bg-gray-600">
     Learn more
    </button>
  </div>
</div>
    </Link>
  );
};

const SkillSection = () => {
  const projects = [
    {
      img: browsing,
      title: "Search Sage - A  Browsing AI Agent",
      description:
        "SearchSage is a Browsing Ai Agent that can handle web search and browsing for you , just type in and get related results in a faster way .",
      
    },
    {
      img: agenticrag,
      title: "Agentic RAG",
      description:
        "Agentic RAG   combines large language models with a retrieval mechanism to access external data sources efficiently",
      
    },
    {
      img: travel,
      title: "TripTact - Your Travelling Assistant",
      description:
        "Trip Tact manages your flight and Bookings by providing the available flight details and act as a tour guide for you ",
      price: "$180",
    },
  ];

  return (
    <div className="bg-primary-dark flex-col justify-center items-start  p-4">
      <div className="text-2xl md:text-4xl font-bold text-primary-content mb-6 flex  justify-center p-4">
        {/* <AnimatedText Text="Check out My Latest Work"></AnimatedText> */}
        <TypewriterEffect words={words}></TypewriterEffect>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
       
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};


export default SkillSection;