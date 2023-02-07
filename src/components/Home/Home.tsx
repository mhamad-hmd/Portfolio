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

    <div ref={displayRef} className={`heroContainer max-w-7xl relative / flex flex-col  items-center / object-top m-auto transition-all duration-500  ${className} `}>

      <img ref={imageRef} className='myImg  object-cover max-w-xs max-h-64' src={myImg} alt="" />

      <div ref={greetingBox} className="greetingBox flex flex-col items-center justify-center gap-4  ">
        <h1 className='text-xl lg:text-3xl text-center max-w-prose '><span className='autoType mainFont scndryColor  ' >Hi am Mohamad Hammoud <br/> I design and code your ideas into reality</span></h1>
        <p className='md:text-base text-center max-w-prose xs:text-sm scndryFont scndryColor'>Feel free to reach out if you need help in making a website for you or your business</p>

      </div>


    </div>

  )
}