
import storePreview from '../../assets/testStorePreview.png';
import smartBrainPrev from '../../assets/smartBrainPrev.png'
import { ProjectConstructor } from '../projectConstructor/projectConstructor';
import './displayProjects.scss';
import { useEffect, useRef } from 'react';
import { scrollIntoView } from '../scrollIntoView/scrollIntoview';




export const DisplayProjects = () => {

    const myRef = useRef<null | HTMLDivElement>(null)

    const handleClick = () => {
        myRef.current?.scrollIntoView({behavior: 'smooth'});
      };    
      
      const myWorkBtn = 'myWork'

      scrollIntoView(myWorkBtn, handleClick)
    
        
        
    

    return (

        <div   className='sectionWrapper max-w-6xl justify-center m-auto section py-3 px-2 grid  '>

            <h1  ref={myRef} className='sectionTitle'>My Work</h1>
            <div>
                <ProjectConstructor title={'Shopify Theme'} typeOfwork={'FrontEnd'} password={'12345'} tools={'liquid/ react.ts/ vite/ tailwindcss/'} aboutIt={'Since I was using shopify and it takes care of all the backend, this project ended up being pure frontend  '} imgPath={storePreview} projectUrl={'https://storefortestapp.myshopify.com/'} />
                <ProjectConstructor title={'SmartBrain'} typeOfwork={'Full Stack'} password={''} tools={'react.js/ webpack/ tailwindcss/ Express/ postgresql/  '} aboutIt={'SmartBrain was the last project in my course, this website takes url of an image and detects the face inside of it '} imgPath={smartBrainPrev} projectUrl={'https://mhamad-hmd.github.io/Smart-Brain/'} />
                </div>
        </div>
    )
}

