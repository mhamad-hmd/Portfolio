import React, { useRef } from 'react';
import Typed from 'typed.js';
import './greeting.scss'
import myImg from '../../assets/myImg.png'



export const Greeting = () => {




  // Create reference to store the DOM element containing the animation
  const el: any = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed: any = React.useRef(null);

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

  return (
    <div className="heroContainer max-w-7xl flex justify-between mx-8 items-center">

      <div className="greetingBox flex flex-col items-start justify-center gap-12 h-screen  ">

        <h1 className='md:text-6xl sm:text-4xl xs:text-3xl'><span className='autoType' ref={el}></span></h1>
        <p className='md:text-base xs:text-sm'>Feel free to reach out if you need help in making a website for you or your business</p>

        <div className='flex justify-start flex-wrap gap-8'>
          <div className='btnDiv'>
            <button id='myWork' className='btn btnB'  >My Work</button>
          </div>

          <div className='btnDiv'>
            <button id='aboutMe' className='btn btnA'>About Me</button>
          </div>

          <div className='btnDiv'>
            <button id='contactMe' className='btn btnB'>Contact Me</button>
          </div>


        </div>

      </div>

      <img className='myImg mb-4 mr-20' src={myImg} alt="" />

    </div>

  )
}