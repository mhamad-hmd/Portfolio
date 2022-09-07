import React, { useRef } from 'react';
import Typed from 'typed.js';
import './greeting.scss'
import '../../app.scss'



export const Greeting = () => {

  


  // Create reference to store the DOM element containing the animation
  const el: any = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed: any = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [`Hello, I'm Mohamad Hammoud`, `I'am a Web Developer`],
      typeSpeed: 70,
      backSpeed: 50,

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
    <div className="greetingBox flex items-center justify-center h-screen text-center ">
      <div>

        <h1 className='md:text-7xl sm:text-5xl xs:text-4xl'><span className='autoType ' ref={el}></span></h1>
        <p className='md:text-base xs:text-sm'>Feel free to reach out if you need help in making a website for you or your business</p>

        <div className='flex justify-center flex-wrap'>
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

    </div>
  )
}