import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Home.scss'
import avatar from '../../assets/avatar.png'
import { myParallax } from '../myParallax/myParallax';
import { useInView } from 'react-intersection-observer';



export default function Home ({className, dark}:{className:string, dark:boolean}) {

  const { ref: displayRef, inView: myElementIsVisible } = useInView();


  const imageRef = useRef<HTMLImageElement>(null)
  const greetingBox = useRef<HTMLDivElement>(null)



  return (

    <div ref={displayRef} className={`heroContainer max-w-7xl  / flex flex-col  items-center / object-top  transition-all duration-300 gap-4   ${className} `}>

      <img ref={imageRef} className='  object-cover max-w-xs max-h-60 bg-transparent' src={avatar} alt="" />

      <div ref={greetingBox} className="greetingBox flex flex-col items-center justify-center gap-4 font-bold ">
        <h1 className='text-lg md:text-xl lg:text-3xl text-center max-w-[36ch]  px-2'><span className={`autoType mainFont ${dark? "text-mainColor" : "text-scndryColor"}   `}>Hi am Mohamad Hammoud <br/> I offer your store a unique and effective online presence  that align with your brand and business goals</span></h1>
        <p className={`md:text-base text-center max-w-prose xs:text-sm scndryFont ${dark? "text-mainColor" : "text-scndryColor"}  font-medium px-4`}>Feel free to reach out if you need help in making a website for you or your business</p>

      </div>


    </div>

  )
}