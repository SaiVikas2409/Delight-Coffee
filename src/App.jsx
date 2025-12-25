import { useState } from 'react'
import React from "react";
import Hero from "./components/Hero/Hero.jsx";
import Services from './components/Stage2/Services.jsx';
import Buy from "./components/Where/Buy.jsx";
import Banner from './components/Banner/Banner.jsx';
import  Contact  from './components/Contact/Contact.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className="overflow-x-hidden">
  
    <Hero/>
    <Services/> 
    <Buy/>
    <Banner/>
    <Contact/>
   </div>
  );
}

export default App
