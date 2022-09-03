import React from 'react';
import Typed from 'typed.js';



// ,

export const Greeting = () => {
    // Create reference to store the DOM element containing the animation
	const el:any = React.useRef(null);
    // Create reference to store the Typed instance itself
      const typed:any = React.useRef(null);

      React.useEffect(() => {
        const options = {
            strings: ['Mohamad Hammoud', 'A Web Developer'],
          typeSpeed: 50,
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
        <div className="greetingBox text-center" >
        
            <h1>I'm <span className='autoType' ref={el}></span></h1>
            <p>Feel free to reach out if you need help in making a website for you</p>
            <div>
              
            </div>

        </div>
    )
}

