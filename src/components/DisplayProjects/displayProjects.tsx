
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

export default function DisplayProjects({ className, dark }: { className: string, dark:boolean }) {

    const { ref: displayRef, inView: myElementIsVisible } = useInView();
    const projectsObj = projects.Projects




    const myRef = useRef<null | HTMLDivElement>(null)
    const projectsRef = useRef<null | HTMLDivElement>(null)

    const [category, setCategory] = useState('');
    const [mainProject, setMainProject] = useState('')

    const myWorkBtn = 'myWork'

    scrollIntoView(myRef.current, 'myWork')



    const handleNavClick = (category: string) => {
        setCategory(category)
    }


    return (
        <div ref={projectsRef} className={`workWrapper   transition-all duration-500 ease-in-out w-full h-full flex    items-center    flex-col absolute top-0 ${className}`}>


            <div ref={displayRef} className={`  relative /  items-start justify-start flex flex-col md:items-center md:flex-row gap-4  md:gap-12 / max-w-full  w-full h-full   `}   >

                <div className="myWorkNav flex justify-center items-center md:items-start md:mt-12 whitespace-nowrap  md:h-full w-full md:w-fit ">
                    <ul className={`  scndryFont   font-medium  / flex md:flex-col gap-8 justify-center p-4 transition-all duration-500 z-20  text-xl lg:text-4xl md:text-3xl  ${!category ? "translate-y-[10vh] md:translate-y-0 md:translate-x-[37vw] scale-125 md:scale-110" : "translate-y-0 scale-100 md:translate-x-0"}  `} onClick={() => setMainProject("")}>
                        <li className={`catigoryTitle ${dark? "text-mainColor" : "text-scndryColor"}  transition-all duration-300 border-b w-fit  ${category == "All" ? " border-scndryColor scale-105" : "border-transparent scale-100"} `} onClick={() => handleNavClick('All')}>All</li>
                        <li className={`catigoryTitle ${dark? "text-mainColor" : "text-scndryColor"} transition-all duration-300 border-b w-fit ${category == "Shopify" ? " border-scndryColor scale-105" : "border-transparent scale-100"} `} onClick={() => handleNavClick("Shopify")}>Shopify</li>
                        <li className={`catigoryTitle ${dark? "text-mainColor" : "text-scndryColor"}   transition-all duration-300 border-b w-fit  ${category == "Full-Stack" ? " border-scndryColor scale-105" : "border-transparent scale-100"} `} onClick={() => handleNavClick('Full-Stack')}>Full-Stack</li>
                    </ul>
                </div>

                <ProjectsSwiper  category={category} projects={projectsObj} />
              
            </div>

        </div>
    )
}

