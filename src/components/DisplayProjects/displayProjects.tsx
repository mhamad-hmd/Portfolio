
import storePreview from '../../assets/testStorePreview.png';
import smartBrainPrev from '../../assets/smartBrainPrev.png'
import { ProjectConstructor } from '../projectConstructor/projectConstructor';
import './displayProjects.scss';
import { useEffect, useRef } from 'react';
import { scrollIntoView } from '../scrollIntoView/scrollIntoview';
import { useInView } from 'react-intersection-observer';



export const DisplayProjects = () => {
    const { ref: displayRef, inView: myElementIsVisible } = useInView();

   
    const myRef = useRef<null | HTMLDivElement>(null)

    const handleClick = () => {
        myRef.current?.scrollIntoView({behavior: 'smooth'});
      };    
      
      const myWorkBtn = 'myWork'

      scrollIntoView(myWorkBtn, handleClick)
    
        
        
    

    return (
        <div ref={displayRef} className='workWrapper flex justify-center m-10'>

            <div  className={`${myElementIsVisible? 'viewWork' :'offWork'} sectionWrapper justify-center  section py-8 px-4 grid `}   >

                <h1  ref={myRef} className='sectionTitle'>My Work</h1>
                <div  >
                    <ProjectConstructor title={'Shopify Theme'} typeOfwork={'FrontEnd'} password={'12345'} tools={'liquid/ react.ts/ vite/ tailwindcss/'} aboutIt={'Since I was using shopify that takes care of all the backend, this project ended up being pure frontend  '} imgPath={storePreview} projectUrl={'https://storefortestapp.myshopify.com/'} />
                    <ProjectConstructor title={'SmartBrain'} typeOfwork={'Full Stack'} password={''} tools={'react.js/ webpack/ tailwindcss/ Express/ postgresql/  '} aboutIt={'SmartBrain was the last project in my course, this website takes url of an image and detects the face in it '} imgPath={smartBrainPrev} projectUrl={'https://mhamad-hmd.github.io/Smart-Brain/'} />
                </div>
            </div>
        </div>
    )
}

