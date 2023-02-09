
import { ProjectCard } from '../ProjectCard/ProjectCard';
import './displayProjects.scss';
import { useEffect, useReducer, useRef, useState } from 'react';
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

export default function DisplayProjects({ className }: { className: string }) {

    const { ref: displayRef, inView: myElementIsVisible } = useInView();
    const projectsObj = projects.Projects

    const projectWrapper = useRef<null | HTMLDivElement>(null)
    const projectContainer = useRef<null | HTMLDivElement>(null)
    const myRef = useRef<null | HTMLDivElement>(null)
    const projectsRef = useRef<null | HTMLDivElement>(null)

    const [category, setCategory] = useState('');
    const [mainProject, setMainProject] = useState('')
    const movingRef = useRef(false)
    const transformRef = useRef(0)
    const transformValueRef = useRef(0)
    const initialPositionRef = useRef(0)
    const lastPageX = useRef(0)




    const myWorkBtn = 'myWork'

    scrollIntoView(myRef.current, 'myWork')



    const handleNavClick = (category: string) => {
        projectWrapper.current!.style.transform = `translateX(${0}px)`
        setCategory(category)
    }



    useEffect(() => {
        projectWrapper.current!.classList.add('workRefresh')
        setTimeout(() => projectWrapper.current!.classList.remove('workRefresh'), 1)
        
    }, [category])


    const gestureStart = (e: { pageX: number; }) => {
        movingRef.current = true
        initialPositionRef.current = e.pageX

        const transformMatrix = projectWrapper.current!.style.transform ? parseInt(projectWrapper.current!.style.transform.split("(")[1].replace("px)", "")) : 0
        transformRef.current = transformMatrix
    }

    const gestureMove = (e: { pageX: number; }) => {
        console.log(movingRef.current )
        if (movingRef.current) {
            const diff = e.pageX - initialPositionRef.current
            if (e.pageX - lastPageX.current > 0) {
                if (transformValueRef.current > 0) {
                    return;
                }
            } else {
                if (Math.abs(transformValueRef.current) > projectWrapper.current!.offsetWidth * .7) {
                    return
                }
            }
            transformValueRef.current = transformRef.current + diff
            console.log(transformValueRef.current + " > " + projectWrapper.current!.offsetWidth)
            projectWrapper.current!.style.transform = `translateX(${transformValueRef.current}px)`
        }
        lastPageX.current = e.pageX
    }

    const gestureEnd = () => {
        movingRef.current = false
    }

    useEffect(() => {
        if (window.PointerEvent) {
            projectContainer.current!.onpointerdown = gestureStart

            projectContainer.current!.onpointermove = gestureMove

            projectContainer.current!.onpointerup = gestureEnd
        }
        else{

            projectContainer.current!.ontouchend = gestureStart
    
            projectContainer.current!.ontouchmove = gestureMove
    
            projectContainer.current!.ontouchstart = gestureEnd
    
            projectContainer.current!.onmousedown = gestureStart
    
            projectContainer.current!.onmousemove = gestureMove
    
            projectContainer.current!.onmouseup = gestureEnd

        }

    }, [])


    console.log(movingRef.current, initialPositionRef.current, transformRef.current)
    return (
        <div ref={projectsRef} className={`workWrapper   transition-all duration-300 ease-in-out w-full   h-full flex section   items-center  md:mx-5  flex-col absolute top-0 ${className}`}>


            <div ref={displayRef} className={`  relative / justify-between items-center flex flex-col md:flex-row gap-4  md:gap-12 / max-w-full  w-full h-full  `}   >

                <div className="myWorkNav flex justify-center items-center whitespace-nowrap md:h-full  ">
                    <ul className={`categoriesWrapper scndryFont scndryColor font-medium  / flex md:flex-col gap-8 justify-center p-4 transition-all duration-200  text-2xl lg:text-4xl md:text-3xl  ${!category? "translate-y-[20vh] md:translate-y-0 md:translate-x-[40vw] scale-125 md:scale-125" : "translatey-0 scale-100 md:translate-x-0"}  `} onClick={() => setMainProject("")}>
                        <li className={`catigoryTitle  `} onClick={() => handleNavClick('All')}>All</li>
                        <li className={`catigoryTitle  `} onClick={() => handleNavClick("Shopify")}>Shopify</li>
                        <li className={`catigoryTitle   `} onClick={() => handleNavClick('Full-Stack')}>Full-Stack</li>
                    </ul>
                </div>


               
                <div ref={projectContainer} className="ProjectsContainer overflow-hidden w-full max-w-7xl ">

                    <div id='projectWrapper' ref={projectWrapper} className={`projectsTrack   / flex md:justify-start  /
                          w-max flex-nowrap gap-8 transition-all duration-500 ease-in-out   touch-none  ${category? "translate-x-0" : "translate-x-full"}   `}  >

                        {
                            projectsObj.map((project: Project, i: number) => {
                                if (mainProject == "") {
                                    if (category == "Shopify") {

                                        return (
                                            project.projectCategory == "shopify" &&
                                            <div className={`projectCardWrapper h-96 max-w-lg  snap-center  flex-shrink-0 ${category ? 'viewWork' : 'offWorkLeft'} cursor-pointer `} >
                                                <ProjectCard mainProject={mainProject} scrollSpeed={0.2} myParallaxView={myElementIsVisible} even={i % 2 == 0 ? true : false} index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url} />
                                            </div>
                                        )
                                    }
                                    else if (category == "Full-Stack") {
                                        return (
                                            project.projectCategory == "full-stack" &&
                                            <div className={` projectCardWrapper h-96 max-w-lg  snap-center  flex-shrink-0 ${category ? 'viewWork' : 'offWorkLeft'} cursor-pointer`} >
                                                <ProjectCard mainProject={mainProject} scrollSpeed={0.2} myParallaxView={myElementIsVisible} even={i % 2 == 0 ? true : false} index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url} />
                                            </div>
                                        )
                                    }
                                    else if (category == "All") {
                                        return (
                                            <div  className={`projectCardWrapper snap-center  h-96 max-w-lg   flex-shrink-0  ${category ? 'viewWork' : 'offWorkLeft'} cursor-pointer`} >
                                                <ProjectCard mainProject={mainProject} scrollSpeed={0.2} myParallaxView={myElementIsVisible} even={i % 2 == 0 ? true : false} index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url} />
                                            </div>
                                        )
                                    }
                                }

                            })
                        }

                    </div>

                </div>
            </div>

        </div>
    )
}

