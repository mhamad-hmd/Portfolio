
import storePreview from '../../assets/testStorePreview.png';
import smartBrainPrev from '../../assets/smartBrainPrev.png'
import EshopPrev from '../../assets/ESHOP.png'
import royalCoats from '../../assets/royal-coats.png'
import { ProjectConstructor } from '../projectConstructor/projectConstructor';
import './displayProjects.scss';
import { useEffect, useRef } from 'react';
import { scrollIntoView } from '../scrollIntoView/scrollIntoview';
import { useInView } from 'react-intersection-observer';



export const DisplayProjects = () => {
    const { ref: displayRef, inView: myElementIsVisible } = useInView();


    const myRef = useRef<null | HTMLDivElement>(null)

    const handleClick = () => {
        myRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const myWorkBtn = 'myWork'

    scrollIntoView(myWorkBtn, handleClick)





    return (
        <div ref={displayRef} className='workWrapper flex section justify-center md:mx-5'>

            <div className={` sectionWrapper justify-center    grid `}   >

                <h1 ref={myRef} className={`sectionTitle ${myElementIsVisible ? 'visible opacity-100' : 'invisible / opacity-0'} ease-in transition duration-300 my-5 `}>My Work</h1>

                <div className=' md:gap-5 xs:gap-10  flex flex-wrap justify-center my-4' >
               
                    <div className={`${myElementIsVisible ? 'viewWork' : 'offWorkLeft'}`}>
                        <ProjectConstructor index={"01"} title={'Shopify Theme'} typeOfwork={'FrontEnd'} password={'12345'} tools={'liquid/ react.ts/ vite/ tailwindcss/'} aboutIt={'Since I was using shopify that takes care of all the backend, this project ended up being pure frontend  '} imgPath={storePreview} projectUrl={'https://storefortestapp.myshopify.com/'} />
                    </div>
{/* 
                    <div className={`${myElementIsVisible ? 'viewWork' : 'offWorkRight'}`}>
                        <ProjectConstructor title={'SmartBrain'} typeOfwork={'Full Stack'} password={''} tools={'react.js/ webpack/ tailwindcss/ Express/ postgresql/zustand '} aboutIt={'SmartBrain was the last project in my course, this website takes url of an image and detects the face in it '} imgPath={smartBrainPrev} projectUrl={'https://mhamad-hmd.github.io/Smart-Brain/'} />
                    </div>

                    <div className={`${myElementIsVisible ? 'viewWork' : 'offWorkTop'}`}>
                        <ProjectConstructor title={'ESHOP'} typeOfwork={'Full-Stack'} password={''} tools={'Vite/ react/ typescript/ node.js/ express/ stripe/ mongodb/ jsonwebtoken/ crypto-js/ zustand/react-router/ axios/ scss/ tailwind '} aboutIt={'ESHOP is a full functional ecommerce website project it was done from scratch no platform was used in it. I did it to understand more about how the backend of ecommerce websites work '} imgPath={EshopPrev} projectUrl={'https://eshop-webproject.herokuapp.com/'} />
                    </div>

                    <div className={`${myElementIsVisible ? 'viewWork' : 'offWorkTop'}`}>
                        <ProjectConstructor title={'Royal Coats'} typeOfwork={'Front-End'} password={'12345'} tools={'Vite/ react/ typescript/ scss/ tailwind '} aboutIt={'Royal Coats is a shopify theme website done from completely scratch, the design was made by me '} imgPath={royalCoats} projectUrl={'https://royal-coats.myshopify.com/'} />
                    </div> */}


                </div>

            </div>
        </div>
    )
}

