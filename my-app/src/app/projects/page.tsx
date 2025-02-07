"use client"
import react from 'react'
import { Carousel } from '@/components/ui/projcarousel'
import Footer from '@/components/footer'
import img1 from '@/assets/Agentic-RAG-Banner.png'
const page = () => {
    const slideData = [
        {
          title: "Search Sage - A  Browsing AI Agent",
          button: "learn more",
          src: "https://in-exstatic-vivofs.vivo.com/bCy1HLzT9bUXp6Mb/IN-VIVO/threadResource/20241106/9e5d53750ecc4c628662828db81f5ac0_w1200_h675.png",
          href:"https://github.com/Abdullah-1121/search-Sage"
        },
        {
          title: "Trip Tact  Travel Agent",
          button: "learn More",
          src: "https://trusteddmc.com/UserFiles/image/Pierre/AI_Travel-Agents_Main.jpeg",
          href:"https://github.com/Abdullah-1121/TripTact--Travel-Planning-Agent"
        },
        {
          title: "Agentic Rag",
          button: "learn More",
          src: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/05/20232203/Agentic-RAG-Banner.png",
          href:"https://github.com/Abdullah-1121/Agentic-RAG-using-LangGraph"
        },
        {
          title: "Pulse Pro AI Fitness Coach",
          button: "learn more",
          src: "https://planfit.ghost.io/content/images/2023/11/DALL-E-2023-11-08-17.01.02---A-photorealistic-image-of-a-slightly-robotic-looking-robot-positioned-in-a-gym.-The-robot-is-holding-a-report-in-its-right-hand--actively-taking-notes-1.png",
          href:"https://github.com/Abdullah-1121/PulsePro-"
        },
        {
            title: "Abryks Ecommerce Store",
            button: "learn more",
            src: "https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg",
            href:"https://e-commerce-omega-orpin.vercel.app/"
          },
          {
            title: "Quiry Quik - Customer Support Agent",
            button: "learn more",
            src: "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
            href:"https://github.com/Abdullah-1121/QuiryQuik---Customer-Support-Agent-"
          },
      ];
      return (
        <div className='flex bg-primary-dark flex-col'>
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={slideData} />
        </div>
        <div className='mt-8'><Footer></Footer></div>
        
        </div>
      );
    
}
export default page;