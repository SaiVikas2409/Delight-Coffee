import React from 'react'
import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram,
    }    from "react-icons/fa";
import {FaMapLocation} from "react-icons/fa6";
//import CreditCards from "../../assets/website/credit-cards.webp";
import {motion} from "framer-motion";

 const Contact = () => {
  return (
    <div className='bg-linear-to-r from-orange-300 to-orange-700 pt-12 pb-6 text-white'> 
        <div className='w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

            <motion.div 
             initial={{ opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true, amount:0.5}}
              transition={{
              delay:0.2,
              duration:0.6,
              }}
                 className='space-y-6 p-4'>
                 <h1 className='text-3xl 
                 font-bold uppercase'>
                 Delight Cafe</h1>
                <p className='text-sm max-w-[300]px'>
                    Where every cup is brewed with care and served with a smile.
                    Come in, relax, and enjoy the simple delight of great coffee.
                </p> 
                <div>
                <p>
                    <FaPhone/>
                    +1(123) 456-4890
                </p>
                <p className='flex items-center gap-2 mt-2'>
                    {" "}
                    <FaMapLocation/>Hyderabad , Telangana
                </p>
               </div>
            </motion.div>
            {/*Fotter Section */}
            
            <motion.div
              initial={{ opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true, amount:0.5}}
              transition={{
              delay:0.4,
              duration:0.8,
              }} 
                    className='space-y-6 p-4'>
                    <h1 className='text-3xl font-bold'>
                        Quick Links</h1>
                        <div className='grid grid-cols grid-cols-2 gap-3'>
                       {/*first column section*/}
                       <div>
                        <ul className='space-y-2'>
                            <li>Home</li>
                             <li>About</li>
                             <li>Contact us</li>
                             <li>Privacy Policy</li>
                        </ul>
                       </div>
                        {/*second  column section*/}
                        <div>
                        <ul className='space-y-2'>
                            <li>Home</li>
                             <li>About</li>
                             <li>Contact us</li>
                             <li>Privacy Policy</li>
                        </ul>
                       </div>            
                    </div>
               

                </motion.div>

            {/* links */}
            <motion.div 
              initial={{ opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true, amount:0.5}}
              transition={{
              delay:0.5,
              duration:0.6,
              }}
                className='space-y-6 p-4'>
                <h1 className=' text-3xl font-bold '>Follow Us
                </h1>
                <div className='flex-items-center gap-3'>
                    <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                    <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                   <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                   <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                </div>
                {/* <div>
                    <h1 className='text-xl font-semibold mb-2'>Payment Methods</h1>
                    <img src={CreditCards} alt="Credit Cards" className='w-[80%]'/>
                </div>
                */}    
                
           </motion.div>    
        </div>
        {/* Copyright Section*/}
        <p className='text-white text-center mt-8 pt-8 border-t-2'> 
             Copyright &copy; 2025 Vikas Developers .All rights reserved</p>
        </div>
    </div>
  )
}
export default Contact;
