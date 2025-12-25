import React from 'react';
import {motion}  from "framer-motion";
import  Coffee1 from "../../assets/Sec2/blackcoffee.png";
import Coffee2 from "../../assets/Sec2/cho-coffee.png";
import Coffee3 from "../../assets/Sec2/coffee-cup-cold.png";

 const servicesData=[
{ 
   id:1,
   image:Coffee1,
   title:"Black Coffee",
   subtitle:"Rich aroma, deep flavor, and a smooth finish.For those who love it real.",

},
{
   id:2,
   image:Coffee2,
   title:"Chocolate Coffee",
   subtitle:"A perfect blend of deep coffee flavor and smooth, creamy chocolate in every sip",

},
{
  id:3,
   image:Coffee3,
   title:"Cold Coffee",
   subtitle:"A cool blend of rich coffee and creamy goodness.Made to refresh every sip.",
},

 ]



const cardVariants={
    hidden:{opacity:0, y:20},
    visible:{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            stiffness:150,
            damping:10,
            ease:"easeInOut",//use an easing function
        },
    },
};
const containerVariants={
    hidden:{opacity:1},
    visible:{
        opacity:1,
        transition:{
            delay:0.6,
            staggerchildren:0.4,//delay between animations
        },
    },
};



const Services = () => {
  return (
    <div className='container  mx-auto my-10 px-6'>
      {/*header section*/}
      <div className='text-center max-w-lg mx-auto space-y-2'>
        <motion.h1 
        initial={{ opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{
          type:"spring",
          stiffness:100,
          damping:15,
          delay:0.4,
        }}
        className=' text-4xl font-bold text-lightGray-600'>
          Fresh and <span className='text-orange-300'> Tasty Coffee</span>
        </motion.h1>
      <motion.p 
      initial={{ opacity:0, y:20}}
        whileInView={{opacity:1,scale:1}}
        transition={{
          type:"spring",
          stiffness:100,
          damping:15,
          delay:0.2,
        }}
        className='text-sm opacity-50'>
        Every cup starts fresh and ends delicious.
        Rich aroma, smooth taste, and a flavor you’ll remember.
        That’s the magic of truly fresh coffee.
         </motion.p>
      </div>
      {/*card section*/}
        <motion.div variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{once:true , amount:0.2}}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {servicesData.map((service)=>(

            <motion.div 
            key={service.id}
            variants={cardVariants}

            className='items-center p-4  space-y-6'>
              <img src={service.image} alt="" 
              className='img-shadow2 max-w-[200px] mx-auto 
              hover:scale-110 duration-300 cursor-pointer'/>
            <div className='space-y-2'>
                <h1 className='text-2xl font-bold text-orange-300'>{service.title}</h1>
                 <h1 className='text-gray-800'>{service.subtitle}</h1>

            </div>

          </motion.div>
          ))}
  
      </motion.div>
    </div>
  )
}

export default Services;