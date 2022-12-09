
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { scrollIntoView } from '../scrollIntoView/scrollIntoview';
import './aboutMe.scss'

export const AboutMe = () => {

    const { ref: displayRef, inView: myElementIsVisible } = useInView();

    const myRef = useRef<null | HTMLDivElement>(null)

    const handleClick = () => {
        myRef.current?.scrollIntoView({behavior: 'smooth'});
      };    
    
      const aboutMeBtn = 'aboutMe'

      scrollIntoView(aboutMeBtn, handleClick)
    
    

    return (

        <div ref={displayRef}  className="aboutMeWrapper h-fit  section">
            <div className={` aboutMe mx-4  ${myElementIsVisible? 'viewAboutMe' : 'offAboutMe'}`} >

                    <h1  className="sectionTitle">About me</h1>

                <div   className={`myInfoWrapper grid justify-center items-center `}>

                    <div  className="myInfo max-w-6xl">
                        <p className="break-words">Started my web development journey by a full stack course on Udemy, and ever since I am acquiring my skills and knowledge to always stay up to date in this field. I am a cooperative worker, and as my projects reveal about me, I am dedicated, responsible and disciplined and also a perfectionist.</p>
                    </div>

                    <div ref={myRef} className='py-4'>

                        <h1 className='skillTitle'>Skills :</h1>

                        <p>Javascript/ Html5/ css/ React.js/ typescript/ node.js/ shopify/ webpack/ vite/ tailwindcss/ scss/ express.js/ postgresql/ mongodb/ zustand/ redux</p>

                    </div>
                    

                </div>

            </div>

        </div>

    )
}



