import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './greeting.scss'
import myImg from '../../assets/myImg.png'
import { myParallax } from '../myParallax/myParallax';
import { useInView } from 'react-intersection-observer';



export const Greeting = () => {

  // Create reference to store the DOM element containing the animation
  const el: any = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed: any = React.useRef(null);
  const { ref: displayRef, inView: myElementIsVisible } = useInView();


  const imageRef = useRef<HTMLImageElement>(null)
  const greetingBox = useRef<HTMLDivElement>(null)


  React.useEffect(() => {
    const options = {
      strings: [`Hello, I'm Mohamad Hammoud`, `I'am a Web Developer`],
      typeSpeed: 60,
      backSpeed: 40,

    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  myParallax(imageRef, -.3, myElementIsVisible)
  myParallax(greetingBox, .1, myElementIsVisible)

  return (

    <div ref={displayRef} className="heroContainer max-w-7xl relative / flex flex-col justify-between items-center / m-auto ">

      <img ref={imageRef} className='myImg absolute' src={myImg} alt="" />
      <div className='absolute canvas'></div>

      <div ref={greetingBox} className="greetingBox flex flex-col items-center justify-center gap-12  ">

        <h1 className='md:text-6xl text-center sm:text-4xl xs:text-3xl'><span className='autoType' ref={el}></span></h1>
        <p className='md:text-base text-center max-w-sm xs:text-sm'>Feel free to reach out if you need help in making a website for you or your business</p>

        <div className='flex justify-center flex-wrap gap-8'>
          <div className='btnDiv'>
            <button id='myWork' className='btn btnB'  >My Work</button>
          </div>

          <div className='btnDiv'>
            <button id='aboutMe' className='btn btnA'>
              <span className='mainFont'>
                About Me
              </span>
            </button>
          </div>

          <div className='btnDiv'>
            <button id='contactMe' className='btn btnB'>Contact Me</button>
          </div>


        </div>

      </div>


    </div>

  )
}