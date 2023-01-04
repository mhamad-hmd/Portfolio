
import storePreview from '../../assets/testStorePreview.png';
import smartBrainPrev from '../../assets/smartBrainPrev.png'
import EshopPrev from '../../assets/ESHOP.png'
import royalCoats from '../../assets/royal-coats.png'
import { ProjectConstructor } from '../projectConstructor/projectConstructor';
import './displayProjects.scss';
import { useEffect, useRef, useState } from 'react';
import { scrollIntoView } from '../scrollIntoView/scrollIntoview';
import { useInView } from 'react-intersection-observer';
import { myParallax } from '../myParallax/myParallax';
import projects from '../../myProjects.json'
import { useSwipeable } from 'react-swipeable';


type Project = {
    title: string;
    index: string;
    typeOfwork: string;
    password: string;
    url: string;
    imgPath: string;
    projectCategory: string;
} 

export const DisplayProjects = (props: any) => {
    const { ref: displayRef, inView: myElementIsVisible } = useInView();
    const projectsObj = projects.Projects

    const projectWrapper = useRef<null | HTMLDivElement>(null)
    const myRef = useRef<null | HTMLDivElement>(null)
    const projectsRef = useRef<null | HTMLDivElement>(null)

    const [category, setCategory] = useState('');
    const [TranslateSlider, setTranslateSlider] = useState(0)
    const [mainProject, setMainProject] = useState('')


    const translateSlide = (direction: string) => {
        if(direction == 'right'){
            console.log("slide")
            setTranslateSlider(TranslateSlider - 33.3)
        }
        else if(direction == 'left'){
            setTranslateSlider(TranslateSlider + 33.3)
        }
    }

    const myWorkBtn = 'myWork'

    scrollIntoView(myRef.current, 'myWork')
    myParallax(projectsRef, 0.03, true)

    const handelers = useSwipeable({
        onSwipedLeft: () => translateSlide('right'),
        onSwipedRight: () => translateSlide('left'),
        trackMouse: true
    })

    const handleNavClick = (category:string) => {
        setCategory(category)
    }
    useEffect (() => {
        
    }, [category])
   

    console.log(mainProject)

    return (
        <div ref={projectsRef} className='workWrapper flex section justify-center md:mx-5  grid'>
            <h1 ref={myRef} className={`sectionTitle ${"myElementIsVisible ? 'visible opacity-100' : 'invisible / opacity-0'"} ease-in transition duration-300 my-5 `}>My Work</h1>


            <div ref={displayRef} className={` sectionWrapper justify-center   flex flex-col `}   >

                <div className="myWorkNav">
                    <div >
                        <ul className="categoriesWrapper mainFont / flex gap-8 /" onClick={() => setMainProject("")}>
                            <li className={`catigoryTitle ${!category ? "navCenter" : ""} `} onClick={() => handleNavClick("Shopify")}>Shopify</li>
                            <li className={`catigoryTitle ${!category ? "navCenter2" : ""} `} onClick={() => handleNavClick('Full-Stack')}>Full-Stack</li>
                            <li className={`catigoryTitle ${!category ? "navCenter3" : ""} `} onClick={() => handleNavClick('All')}>All</li>
                        </ul>
                    </div>
                </div>


                <div {...handelers}  className={`projectsWrapper md:gap-32s xs:gap-10 / flex justify-start / my-4 ${category ? 'viewWork' : 'offWorkLeft'} `} style={{transform: `translate(${TranslateSlider}%)`}}  >
                    {
                        projectsObj.map((project: Project, i:number) => {
                            if(mainProject == "" ){

                                if(category == "Shopify"){
                                        return (
                                            project.projectCategory == "shopify" && 
                                            <div className={`${category ? 'viewWork' : 'offWorkLeft'}`} onClick={() => setMainProject(project.title)}>
                                                <ProjectConstructor mainProject={mainProject} scrollSpeed={0.2} myParallaxView={myElementIsVisible} even={i % 2 == 0 ? true : false} index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url}  />
                                            </div>
                                        )
                                }
                                else if(category == "Full-Stack"){
                                    return (
                                        project.projectCategory == "full-stack" && 
                                        <div className={`${category ? 'viewWork' : 'offWorkLeft'}`} onClick={() => setMainProject(project.title)}>
                                            <ProjectConstructor mainProject={mainProject} scrollSpeed={0.2} myParallaxView={myElementIsVisible} even={i % 2 == 0? true : false} index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url} />
                                        </div>
                                    )
                                }
                                else if(category == "All"){
                                    return (
                                        <div className={ `${category ? 'viewWork' : 'offWorkLeft'}`} onClick={() => setMainProject(project.title)}>
                                            <ProjectConstructor mainProject={mainProject} scrollSpeed={0.2} myParallaxView={myElementIsVisible} even={i % 2 == 0? true : false} index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url} />
                                        </div>
                                    )
                                }
                            }
                            else{
                                if(project.title == mainProject){
                                    return (
                                        <div onClick={() => setMainProject(project.title)}>
                                            <ProjectConstructor mainProject={mainProject} scrollSpeed={0.2} myParallaxView={myElementIsVisible} even={i % 2 == 0? true : false} index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url} />
                                        </div>
                                    )
                                }
                            }

                        })
                    }

                </div>

            </div>
        </div>
    )
}

