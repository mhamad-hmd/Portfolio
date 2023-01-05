
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
    const leftArrow = useRef<null | HTMLDivElement>(null)
    const rightArrow = useRef<null | HTMLDivElement>(null)

    const [category, setCategory] = useState('');
    const [TranslateSlider, setTranslateSlider] = useState(0)
    const [mainProject, setMainProject] = useState('')
    const [translateBy, setTranslateBy] = useState(0)

    
    const projectWrapperChildren = projectWrapper.current! && projectWrapper.current!.children.length 

    const responsiveTranslate = window.innerWidth > 1028 ? 33.3 : window.innerWidth > 425 ? 66.6 : 100
    const maxTranslate =  100 - projectWrapperChildren * 33.3 

    console.log(maxTranslate, translateBy, projectWrapperChildren)

    const translateSlide = (direction: string) => {
        if (direction == 'right' && maxTranslate > translateBy ) {
            setTranslateBy (translateBy + 33.3)
            console.log(translateBy)
            setTranslateSlider(TranslateSlider - responsiveTranslate)
            rightArrow.current!.style.translate = "20px"
            rightArrow.current!.ontransitionend = () => {
            rightArrow.current!.style.translate = "0px"
            }

        }
        else if (direction == 'left' && TranslateSlider < 0) {
            setTranslateBy (translateBy - 33.3)
            setTranslateSlider(TranslateSlider + responsiveTranslate)
            leftArrow.current!.style.translate = "-20px"
            leftArrow.current!.ontransitionend = () => {
            leftArrow.current!.style.translate = "0px"
            }
        }
        else if (direction == 'reset') {
            setTranslateSlider(0)
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

    const handleNavClick = (category: string) => {
        setCategory(category)
    }
    useEffect(() => {
        projectWrapper.current!.classList.add('workRefresh')
        setTimeout(() => projectWrapper.current!.classList.remove('workRefresh'), 1)
        category != "All" && translateSlide("reset") 
    }, [category])
    
    useEffect(() => {
        translateSlide("reset")
    },[mainProject])




    return (
        <div ref={projectsRef} className='workWrapper  flex section  justify-center items-center  md:mx-5  flex-col'>
            <h1 ref={myRef} className={`sectionTitle ${"myElementIsVisible ? 'visible opacity-100' : 'invisible / opacity-0'"} ease-in transition duration-300 `}>My Work</h1>


            <div ref={displayRef} className={` sectionWrapper relative justify-center   flex flex-col `}   >

                <div className="myWorkNav">
                    <div >
                        <ul className="categoriesWrapper mainFont / flex gap-8 /" onClick={() => setMainProject("")}>
                            <li className={`catigoryTitle ${!category ? "navCenter" : ""} `} onClick={() => handleNavClick("Shopify")}>Shopify</li>
                            <li className={`catigoryTitle ${!category ? "navCenter2" : ""} `} onClick={() => handleNavClick('Full-Stack')}>Full-Stack</li>
                            <li className={`catigoryTitle ${!category ? "navCenter3" : ""} `} onClick={() => handleNavClick('All')}>All</li>
                        </ul>
                    </div>
                </div>


                <span ref={leftArrow} className={`projectsArrow projectsArrowLeft cursor-pointer ${category == "All" && mainProject == "" ? "visible" : "hidden"}`} onClick={() => translateSlide('left')}>
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.0312 44.698C33.5659 45.2327 34.2348 45.4874 35.0378 45.4621C35.8389 45.4388 36.5069 45.1598 37.0416 44.625C37.5763 44.0903 37.8437 43.4098 37.8437 42.5834C37.8437 41.757 37.5763 41.0764 37.0416 40.5417L34.4166 37.9167H43.8228C44.6492 37.9167 45.3298 37.6367 45.8645 37.0767C46.3992 36.5187 46.6666 35.8264 46.6666 35C46.6666 34.1737 46.3876 33.4805 45.8295 32.9205C45.2695 32.3624 44.5763 32.0834 43.7499 32.0834H34.4166L37.1145 29.3855C37.6492 28.8507 37.9049 28.1818 37.8816 27.3788C37.8563 26.5777 37.5763 25.9098 37.0416 25.375C36.5069 24.8403 35.8263 24.573 34.9999 24.573C34.1735 24.573 33.493 24.8403 32.9583 25.375L25.3749 32.9584C24.8402 33.4931 24.5728 34.1737 24.5728 35C24.5728 35.8264 24.8402 36.507 25.3749 37.0417L33.0312 44.698ZM34.9999 64.1667C30.9652 64.1667 27.1735 63.4006 23.6249 61.8684C20.0763 60.3381 16.9895 58.2605 14.3645 55.6355C11.7395 53.0105 9.66186 49.9237 8.13159 46.375C6.59936 42.8264 5.83325 39.0348 5.83325 35C5.83325 30.9653 6.59936 27.1737 8.13159 23.625C9.66186 20.0764 11.7395 16.9896 14.3645 14.3646C16.9895 11.7396 20.0763 9.66101 23.6249 8.12879C27.1735 6.59851 30.9652 5.83337 34.9999 5.83337C39.0346 5.83337 42.8263 6.59851 46.3749 8.12879C49.9235 9.66101 53.0103 11.7396 55.6353 14.3646C58.2603 16.9896 60.338 20.0764 61.8683 23.625C63.4005 27.1737 64.1666 30.9653 64.1666 35C64.1666 39.0348 63.4005 42.8264 61.8683 46.375C60.338 49.9237 58.2603 53.0105 55.6353 55.6355C53.0103 58.2605 49.9235 60.3381 46.3749 61.8684C42.8263 63.4006 39.0346 64.1667 34.9999 64.1667Z" fill="#B90000" />
                    </svg>
                </span>
                <span ref={rightArrow} className={`projectsArrow projectsArrowRight cursor-pointer ${category == "All" && mainProject == "" ? "visible" : "hidden"}`} onClick={() => translateSlide("right")}>
                    <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.2083 38.7917L38.7917 31.2083C39.3264 30.6736 39.5938 29.9931 39.5938 29.1667C39.5938 28.3403 39.3264 27.6597 38.7917 27.125L31.1354 19.4688C30.6007 18.934 29.9328 18.6783 29.1317 18.7017C28.3286 18.7269 27.6597 19.0069 27.125 19.5417C26.5903 20.0764 26.3229 20.7569 26.3229 21.5833C26.3229 22.4097 26.5903 23.0903 27.125 23.625L29.75 26.25H20.3438C19.5174 26.25 18.8368 26.529 18.3021 27.0871C17.7674 27.6471 17.5 28.3403 17.5 29.1667C17.5 29.9931 17.78 30.6853 18.34 31.2433C18.8981 31.8033 19.5903 32.0833 20.4167 32.0833H29.75L27.0521 34.7812C26.5174 35.316 26.2617 35.9849 26.285 36.7879C26.3103 37.589 26.5903 38.2569 27.125 38.7917C27.6597 39.3264 28.3403 39.5938 29.1667 39.5938C29.9931 39.5938 30.6736 39.3264 31.2083 38.7917V38.7917ZM29.1667 58.3333C25.1319 58.3333 21.3403 57.5672 17.7917 56.035C14.2431 54.5047 11.1563 52.4271 8.53125 49.8021C5.90625 47.1771 3.82861 44.0903 2.29833 40.5417C0.766111 36.9931 0 33.2014 0 29.1667C0 25.1319 0.766111 21.3403 2.29833 17.7917C3.82861 14.2431 5.90625 11.1563 8.53125 8.53125C11.1563 5.90625 14.2431 3.82764 17.7917 2.29542C21.3403 0.765139 25.1319 0 29.1667 0C33.2014 0 36.9931 0.765139 40.5417 2.29542C44.0903 3.82764 47.1771 5.90625 49.8021 8.53125C52.4271 11.1563 54.5047 14.2431 56.035 17.7917C57.5672 21.3403 58.3333 25.1319 58.3333 29.1667C58.3333 33.2014 57.5672 36.9931 56.035 40.5417C54.5047 44.0903 52.4271 47.1771 49.8021 49.8021C47.1771 52.4271 44.0903 54.5047 40.5417 56.035C36.9931 57.5672 33.2014 58.3333 29.1667 58.3333Z" fill="#B90000" />
                    </svg>
                </span>
                <div id='projectWrapper' ref={projectWrapper} className={`projectsWrapper   / flex md:justify-start  ${mainProject == "" ? "xs:justify-start" : "xs:justify-center" } / my-4  `} style={{ transform: `translate(${TranslateSlider}%)` }}  >

                    {
                        projectsObj.map((project: Project, i: number) => {
                            if (mainProject == "") {
                                if (category == "Shopify") {
                                    return (
                                        project.projectCategory == "shopify" &&
                                        <div className={` ${category ? 'viewWork' : 'offWorkLeft'} cursor-pointer `} onClick={() => setMainProject(project.title)}>
                                            <ProjectConstructor mainProject={mainProject} scrollSpeed={0.2} myParallaxView={myElementIsVisible} even={i % 2 == 0 ? true : false} index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url} />
                                        </div>
                                    )
                                }
                                else if (category == "Full-Stack") {
                                    return (
                                        project.projectCategory == "full-stack" &&
                                        <div className={`  ${category ? 'viewWork' : 'offWorkLeft'} cursor-pointer`} onClick={() => setMainProject(project.title)}>
                                            <ProjectConstructor mainProject={mainProject} scrollSpeed={0.2} myParallaxView={myElementIsVisible} even={i % 2 == 0 ? true : false} index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url} />
                                        </div>
                                    )
                                }
                                else if (category == "All") {
                                    return (
                                        <div className={` projectCardWrapper ${category ? 'viewWork' : 'offWorkLeft'} cursor-pointer`} onClick={() => setMainProject(project.title)}>
                                            <ProjectConstructor mainProject={mainProject} scrollSpeed={0.2} myParallaxView={myElementIsVisible} even={i % 2 == 0 ? true : false} index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url} />
                                        </div>
                                    )
                                }
                            }
                            else {
                                if (project.title == mainProject) {
                                    return (
                                        <div className='  ' onClick={() => setMainProject(project.title)}>
                                            <ProjectConstructor mainProject={mainProject} scrollSpeed={0.2} myParallaxView={myElementIsVisible} even={i % 2 == 0 ? true : false} index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url} />
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

