
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { scrollIntoView } from '../scrollIntoView/scrollIntoview';
import './aboutMe.scss'
import { myParallax } from '../myParallax/myParallax';

export default function AboutMe  ({className, dark} : {className:string, dark: boolean})  {

    const myRef = useRef<null | HTMLDivElement>(null)
    const aboutMeWrapper = useRef<null | HTMLDivElement>(null)

    const { ref: displayRef, inView: myElementIsVisible } = useInView();

    // myParallax(aboutMeWrapper, -0.4, true)

    const aboutMeBtn = 'aboutMe'

    scrollIntoView(myRef.current, aboutMeBtn)



    return (

        <div ref={aboutMeWrapper} className={`aboutMeWrapper section absolute top-0 transition-all duration-500 ease-in-out  ${className}`}>
            <div ref={displayRef} className={` aboutMe mx-4  `} >


                <div className={`myInfoWrapper grid gap-4 lg:gap-12 md:gap-8 justify-center items-center `}>

                        <p className={`break-words m-auto max-w-prose w-full ${dark? "text-mainColor" : "text-scndryColor"} scndryFont font-medium text-xl md:text-2xl `}>Started my web development journey by a full stack course on Udemy, and ever since I am acquiring my skills and knowledge to always stay up to date in this field. I am a cooperative worker, and as my projects reveal about me, I am dedicated, responsible and disciplined and also a perfectionist.</p>

                    <div ref={myRef} className={`py-4 ${dark? "text-mainColor" : "text-scndryColor"}  w-full `}>

                        <h1 className={`skillTitle mainFont font-bold text-3xl lg:text-4xl `}>Skills :</h1>

                        <p className='scndryFont font-medium text-xl md:text-2xl max-w-prose '>Javascript/ Html5/ css/ React.js/ typescript/ node.js/ shopify/ webpack/ vite/ tailwindcss/ scss/ express.js/ postgresql/ mongodb/ zustand/ redux</p>

                    </div>


                </div>

            </div>

        </div>

    )
}



