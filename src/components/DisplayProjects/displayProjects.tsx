
import storePreview from '../../assets/testStorePreview.png';
import smartBrainPrev from '../../assets/smartBrainPrev.png'
import EshopPrev from '../../assets/ESHOP.png'
import royalCoats from '../../assets/royal-coats.png'
import { ProjectConstructor } from '../projectConstructor/projectConstructor';
import './displayProjects.scss';
import { useEffect, useRef } from 'react';
import { scrollIntoView } from '../scrollIntoView/scrollIntoview';
import { useInView } from 'react-intersection-observer';
import { myParallax } from '../../myParallax/myParallax';



export const DisplayProjects = (props: any) => {
    const { ref: displayRef, inView: myElementIsVisible } = useInView();

    const myRef = useRef<null | HTMLDivElement>(null)
    const projectsRef = useRef<null | HTMLDivElement>(null)

    const handleClick = () => {
        myRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const myWorkBtn = 'myWork'

    scrollIntoView(myWorkBtn, handleClick)
    myParallax(projectsRef, 0.03, true)





    return (
        <div ref={projectsRef} className='workWrapper flex section justify-center md:mx-5'>

            <div className={` sectionWrapper justify-center    grid `}   >

                <h1 ref={myRef} className={`sectionTitle ${"myElementIsVisible ? 'visible opacity-100' : 'invisible / opacity-0'"} ease-in transition duration-300 my-5 `}>My Work</h1>

                <div className=' md:gap-32 xs:gap-10  flex flex-wrap justify-center my-4' >

                    <div className={"`${myElementIsVisiblee ? 'viewWork' : 'offWorkLeft'}`"}>
                        <ProjectConstructor scrollSpeed={0.2} myParallaxView={myElementIsVisible} even={false} index={"01"} title={'Shopify Theme'} typeOfwork={'FrontEnd'} password={'12345'} tools={'liquid/ react.ts/ vite/ tailwindcss/'}  imgPath={storePreview} projectUrl={'https://storefortestapp.myshopify.com/'} />
                    </div>

                    <div className={"`${myElementIsVisible ? 'viewWork' : 'offWorkRight'}`"}>
                        <ProjectConstructor scrollSpeed={-0.2} myParallaxView={myElementIsVisible} even={true} index={"02"} title={'SmartBrain'} typeOfwork={'Full Stack'} password={''} tools={'react.js/ webpack/ tailwindcss/ Express/ postgresql/zustand '}  imgPath={smartBrainPrev} projectUrl={'https://mhamad-hmd.github.io/Smart-Brain/'} />
                    </div>


                    <div className={"`${myElementIsVisible ? 'viewWork' : 'offWorkTop'}`"}>
                        <ProjectConstructor scrollSpeed={0.2} myParallaxView={myElementIsVisible} even={false} index={"03"} title={'ESHOP'} typeOfwork={'Full-Stack'} password={''} tools={'Vite/ react/ typescript/ node.js/ express/ stripe/ mongodb/ jsonwebtoken/ crypto-js/ zustand/react-router/ axios/ scss/ tailwind '}   imgPath={EshopPrev} projectUrl={'https://eshop-webproject.herokuapp.com/'} />
                    </div>

                    <div className={"`${myElementIsVisible ? 'viewWork' : 'offWorkTop'}`"}>
                        <ProjectConstructor scrollSpeed={-0.2} myParallaxView={myElementIsVisible} even={true} index={"04"} title={'Royal Coats'} typeOfwork={'Front-End'} password={'12345'} tools={'Vite/ react/ typescript/ scss/ tailwind '}  imgPath={royalCoats} projectUrl={'https://royal-coats.myshopify.com/'} />
                    </div>


                </div>

            </div>
        </div>
    )
}

