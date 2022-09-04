
import storePreview from '../../assets/testStorePreview.png';
import smartBrainPrev from '../../assets/smartBrainPrev.png'
import { ProjectConstructor } from '../projectConstructor/projectConstructor';
import './displayProjects.scss';




export const DisplayProjects = () => {


return(
   
        <div className='sectionWrapper grid py-4 my-16 mx-2  '>

            <h1 className='sectionTitle'>My Work</h1>

           
            <ProjectConstructor title={'Shopify Theme'} typeOfwork={'FrontEnd'} password={'12345'} tools={'liquid/ react.ts/ vite/ tailwindcss/'} aboutIt={'Since I was using shopify and it takes care of all the backend, this project ended up being pure frontend  '} imgPath={storePreview} projectUrl={'https://storefortestapp.myshopify.com/'}/>
            <ProjectConstructor title={'SmartBrain'} typeOfwork={'Full Stack'} password={''} tools={'react.js/ webpack/ tailwindcss/ Express/ postgresql/  '} aboutIt={'SmartBrain was the last project my course, this website takes url of an image and detects the face inside of it not much but its an honest work'} imgPath={smartBrainPrev} projectUrl={'https://mhamad-hmd.github.io/Smart-Brain/'}/>

        </div>
    )
}

