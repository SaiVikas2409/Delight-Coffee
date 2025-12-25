import React from 'react'
import BannerImg from "../../assets/banner.jpg";
import {motion} from "framer-motion";


const Bannerstyle={
  backgroundImage: `url(${BannerImg})`,
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  height:"100%",
  width:"100%",
}
const Banner = () => {
  return (
    <div className='w-full p-10'>
      <div style={Bannerstyle} className='min-h-[250px] sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
        <div>
          <div className='space-y-4 max-w-lg  mx-auto'>
            <motion.h1 
             initial={{ opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              transition={{
              type:"spring",
              stiffness:100,
              damping:15,
              delay:0.4,
              }}className='text-xl sm:text-3xl md:text-4xl text-center
              font-semibold text-white'>Download the app</motion.h1>
            <motion.p 
               initial={{ opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              transition={{
              type:"spring",
              stiffness:100,
              damping:15,
              delay:0.2,
            }}

              className='text-center px4 sm:px-8 md:px-16 text-white'> 
              Order fresh coffee, discover new flavors,
              and enjoy café vibes anytime, anywhere
              </motion.p>
              {/* images link */}
          {  /*  <div className='flex justify-center items-center gap-4'>
                <a href="#"  className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                <img src={AppstoreImg} alt=""/>
                </a>
                <a href="#"  className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                  <img src={PlayStoreImg} alt=""/>
                </a>
                </div>*/}
              
              
          </div>
        </div>
        
      </div>
    </div>
    
  )
}
export default Banner;
