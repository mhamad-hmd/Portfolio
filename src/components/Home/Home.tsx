import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Home.scss'
import myImg from '../../assets/myImg.png'
import { myParallax } from '../myParallax/myParallax';
import { useInView } from 'react-intersection-observer';



export default function Home ({className}:{className:string}) {

  const { ref: displayRef, inView: myElementIsVisible } = useInView();


  const imageRef = useRef<HTMLImageElement>(null)
  const greetingBox = useRef<HTMLDivElement>(null)



  return (

    <div ref={displayRef} className={`heroContainer max-w-7xl  / flex flex-col  items-center / object-top m-auto transition-all duration-300   ${className} `}>

      <img ref={imageRef} className='  object-cover max-w-xs max-h-60' src={myImg} alt="" />

      <div ref={greetingBox} className="greetingBox flex flex-col items-center justify-center gap-4 font-bold h-full">
        <h1 className='text-lg md:text-xl lg:text-3xl text-center max-w-prose '><span className='autoType mainFont scndryColor  ' >Hi am Mohamad Hammoud <br/> I design and code your ideas into reality</span></h1>
        <p className='md:text-base text-center max-w-prose xs:text-sm scndryFont scndryColor font-medium px-4'>Feel free to reach out if you need help in making a website for you or your business</p>

      </div>


    </div>

  )
}