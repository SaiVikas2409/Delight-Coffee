import React from 'react';
import BgImage from "../../assets/bg-image.jpeg";
import CoffeeMain from "../../assets/black.png";
import Navbar from "../Navbar/Navbar.jsx";
import { motion } from "framer-motion";
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar]= React.useState(false);
  return (
    <main style={bgImage} className='w-full min-h-screen'>
      <section className="relative min-h-screen w-full">
        <div className="w-full">
          {/*Navbar section*/}
          <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
          {/*Hero section*/}

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  
                          place-items-center min-h-screen pt-5">

            {/* TEXT CONTENT */}
            <div className="text-orange-200 p-4 space-y-6">
              <motion.h1  
                initial={{opacity:0 ,y:-100}} 
                whileInView={{opacity:1, y:0}}
                transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay: 0.4,
                }}
                className="text-8xl font-bold leading-tight ml-8">
                Coffee Lub
              </motion.h1>

              <motion.div 
                initial={{opacity:0 ,y:100}} 
                whileInView={{opacity:1, y:0}}
                transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay: 0.2,
                }}
                className="relative ml-10  max-w-md">
                <div className="absolute inset-0 bg-gray-700/30 rounded-lg"></div>

                <div className="relative z-10 p-4 space-y-6">
                  <h2 className="text-2xl font-bold leading-tight upper-case">
                    COFFEE @ LuvLife
                  </h2>

                  <p className="text-sm font-normal:400 opacity-60 leading-loose">
                    It’s a lifestyle.
                    From the first aroma in the morning to late-night conversations, coffee fuels moments, moods, and memories.
                    Sip slow. Live bold. Love coffee
                  </p>
                </div>
              
              </motion.div>
            </div>

            {/* HERO IMAGE SECTION */}
            <div className="relative flex items-center justify-center">

             

              {/* COFFEE IMAGE */}
              <motion.img
                initial={{opacity:0 ,scale:0}} 
                animate={{opacity:1, scale:1}}
                transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay: 0.4,
                }}
                src={CoffeeMain}
                alt="coffee image"
                className="relative z-10 h-[450px] md:h-[450px] lg:h-[600px] 
                           img-shadow"/>
             {/* ORANGE CIRCLE BEHIND IMAGE */}
              <motion.div
                initial={{opacity:0 ,y:100}} 
                animate={{opacity:1, scale:1}}
                transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay: 1.2,
                }} className="absolute
                              m-auto-tranlate-y-10 h-[220px] w-[220px] 
                              bg-orange-300 rounded-full 
                              z-0">
              </motion.div>
             {/* <div className="absolute top-1/2 left-[200px] z-10">
                <h1 
                className="text-[240px] scale-150 font-bold text-darkGray/10  leading-none">
                Coffee lvb</h1>
              </div>*/}

            </div>

            {/* THIRD COLUMN (EMPTY FOR NOW) */}
          <motion.div
                initial={{opacity:0 ,y:100}} 
                whileInView={{opacity:1, y:0}}
                transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay: 0.2,
                }} className="text-orange-200 p-4 space-y-6">
              <div className="relative ml-10  max-w-md">
                <div className="absolute -top-6 -right-10 bg-drakgray-700/30 rounded-lg"></div>

                <div className="relative z-10 p-4 space-y-4">
                  <h2 className="text-1xl">
                    Black Tumbler
                  </h2>

                  <p className="text-sm opacity-55 leading-loose">
                    Pure black. Pure coffee.
                    For those who carry their coffee everywhere.
                    Built for people who love their brew strong and their style clean 
                  </p>
                </div>
              </div>
            </motion.div>
        

          </div>
        </div>
        {/*sidebar Mneu section */}
        {
          sidebar && (
             <motion.div
             initial={{x:"100%"}}
             whileInView={{x:0}}
             className='absolute top-0 right-0 w-[90px] h-full bg-linear-to-b from-orange-400 to-orange-800 backdrop-blur-sm z-10'>
            <div className='w-full h-full flex justify-center items-center'>
              <div className='flex flex-col justify-between items-center gap-6 text-white'>
                {/*line*/}
                <div className="w-px h-[70px] bg-white">
                </div>
                  {/*social Icons*/}
                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                      <FaFacebookF className='text-2xl'/>
                    </div>
                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                      <FaTwitter className='text-2xl'/>
                    </div>
                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                     <FaInstagram className='text-2xl'/>
                    </div>
              
                  <div className="w-px h-[70px] bg-white"></div>
              </div>
            </div>
        </motion.div>

          )
        }
       
      </section>
    </main>
  );
};

export default Hero;
