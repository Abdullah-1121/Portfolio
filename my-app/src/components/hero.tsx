import React from 'react'
import {useState,useEffect} from 'react'
import Animatedtext from '@/components/animatedtext'
import Friendsbutton from '@/components/friendsbutton'
import dynamic from 'next/dynamic'
import animation from "@/assets/Animation - 1738646475344.json"
import {TextGenerateEffect} from '@/components/ui/titletext'
import Link from 'next/link'
import Loading from '@/app/loading'

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <Loading />,
})

const hero = () => {
    // const [isClient, setIsClient] = useState(false);

    // useEffect(() => {
    //   setIsClient(true); // Set the state to true after the component mounts
    // }, []);
  
    // if (!isClient) return null; 
  
  return (
    <div className='bg-primary-dark min-h-screen  h-auto flex md:flex-row flex-col  w-full text-primary-light '>
        <div className=' w-full flex flex-col  order-2 md:order-1 justify-center  '>
            <div className='  p-2 m-2 text-xl text-white'>Hi there , I </div>
            <div className='  p-2 m-2'>
                <div className='md:text-5xl lg:text-7xl xs:text-3xl text-2xl font-bold text-white'>
                Craft <span className='text-primary-content'>Smart Systems</span> for <span className='text-primary-content'>Smarter Future</span>
                </div>

            </div>
             <div className=' p-2 m-2 text-xl text-white '>
                <Animatedtext Text='I engineer intelligent systems that drive automation and autonomy for businesses. By integrating AI-driven decision-making, I create solutions that optimize workflows, enhance efficiency, and unlock new possibilities. My focus is on transforming operations into adaptive, self-sustaining systems that evolve with business needs.'></Animatedtext>
             </div>
             <div className=' p-2 md:m-2 mx-auto '>
                <Link href='/contact'><Friendsbutton value='Lets Talk!'></Friendsbutton></Link>
             </div>
        </div>
        <div className=' w-full  order-1 md:order-2 flex justify-center items-center md:p-auto p-0'>
            <Lottie animationData={animation} style={{ background: "transparent" }}></Lottie>
        </div>
        
    </div>
  )
}

export default hero