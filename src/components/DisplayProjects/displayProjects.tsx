
import { ProjectCard } from '../ProjectCard/ProjectCard';
import './displayProjects.scss';
import { useEffect, useReducer, useRef, useState } from 'react';
import { scrollIntoView } from '../scrollIntoView/scrollIntoview';
import { useInView } from 'react-intersection-observer';
import { myParallax } from '../myParallax/myParallax';
import projects from '../../myProjects.json'
import { useSwipeable } from 'react-swipeable';
import ProjectsSwiper from '../projectsSwiper/projectSwiper';


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
        setCategory(category)
    }






    // const gestureStart = (e: any) => {
    //     movingRef.current = true
    //     initialPositionRef.current = e.pageX

    //     const transformMatrix = projectWrapper.current!.style.transform ? parseInt(projectWrapper.current!.style.transform.split("(")[1].replace("px)", "")) : 0
    //     transformRef.current = transformMatrix
    // }

    // const gestureMove = (e: any) => {
    //     if (movingRef.current) {
    //         const diff = e.pageX - initialPositionRef.current
    //         const offset = projectWrapper.current!.children.length > 3 ? .7 : .5
    //         if (e.pageX - lastPageX.current > 0) {
    //             if (transformValueRef.current > 0) {
    //                 return;
    //             }
    //         } else {
    //             if (Math.abs(transformValueRef.current) > projectWrapper.current!.offsetWidth - projectWrapper.current!.scrollWidth ) {
    //                 return
    //             }
    //         }
    //         console.log(projectWrapper.current!.offsetWidth, projectWrapper.current!.scrollWidth)
    //         transformValueRef.current = transformRef.current + diff
    //         projectWrapper.current!.style.transform = `translateX(${transformValueRef.current}px)`
    //     }
    //     lastPageX.current = e.pageX
    // }

    // const gestureEnd = () => {
    //     movingRef.current = false
    // }

    // useEffect(() => {
    //     if (window.PointerEvent) {
    //         projectContainer.current!.onpointerdown = gestureStart

    //         projectContainer.current!.onpointermove = gestureMove

    //         projectContainer.current!.onpointerup = gestureEnd
    //     }
    //     else {

    //         projectContainer.current!.ontouchend = gestureStart

    //         projectContainer.current!.ontouchmove = gestureMove

    //         projectContainer.current!.ontouchstart = gestureEnd

    //         projectContainer.current!.onmousedown = gestureStart

    //         projectContainer.current!.onmousemove = gestureMove

    //         projectContainer.current!.onmouseup = gestureEnd

    //     }

    // }, [])


    return (
        <div ref={projectsRef} className={`workWrapper   transition-all duration-500 ease-in-out w-full    h-full flex section   items-center    flex-col absolute top-0 ${className}`}>


            <div ref={displayRef} className={`  relative /  items-center flex flex-col md:flex-row gap-4  md:gap-12 / max-w-full  w-full h-full  `}   >

                <div className="myWorkNav flex justify-center items-center whitespace-nowrap md:h-full  ">
                    <ul className={`categoriesWrapper scndryFont scndryColor font-medium  / flex md:flex-col gap-8 justify-center p-4 transition-all duration-200  text-xl lg:text-4xl md:text-3xl  ${!category ? "translate-y-[10vh] md:translate-y-0 md:translate-x-[37vw] scale-125 md:scale-110" : "translate-y-0 scale-100 md:translate-x-0"}  `} onClick={() => setMainProject("")}>
                        <li className={`catigoryTitle  transition-all duration-300 border-b w-fit  ${category == "All" ? " border-scndryColor scale-105" : "border-transparent scale-100"} `} onClick={() => handleNavClick('All')}>All</li>
                        <li className={`catigoryTitle transition-all duration-300 border-b w-fit ${category == "Shopify" ? " border-scndryColor scale-105" : "border-transparent scale-100"} `} onClick={() => handleNavClick("Shopify")}>Shopify</li>
                        <li className={`catigoryTitle   transition-all duration-300 border-b w-fit  ${category == "Full-Stack" ? " border-scndryColor scale-105" : "border-transparent scale-100"} `} onClick={() => handleNavClick('Full-Stack')}>Full-Stack</li>
                    </ul>
                </div>

                <ProjectsSwiper  category={category} projects={projectsObj} />
              
            </div>

        </div>
    )
}

