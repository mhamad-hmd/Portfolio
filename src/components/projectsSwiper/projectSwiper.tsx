import { useEffect, useRef, useState } from "react"
import { getTouchEventData } from "../../lib/dom";
import { getRefValue, useStateRef } from "../../lib/hooks";
import { ProjectCard } from "../ProjectCard/ProjectCard"


type Project = {
    title: string;
    index: string;
    typeOfwork: string;
    password: string;
    url: string;
    imgPath: string;
    projectCategory: string;
}

export default function ProjectsSwiper({ category, projects }: { category: string, projects: Array<Project> }) {

    const projectCard = useRef<null | HTMLDivElement>(null)
    const projectWrapper = useRef<null | HTMLDivElement>(null)
    const projectContainer = useRef<null | HTMLDivElement>(null)
    const currentOffsetX = useRef(0)
    const startXRef = useRef(0)
    const containerWidthRef = useRef(0)
    const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
    const minOffsetXRef = useRef(0)
    const [isSwiping, setIsSwiping] = useState(false);
    const [selectable, setSelectable] = useState(false);


    useEffect(() => {
        projectWrapper.current!.classList.add('workRefresh')
        setTimeout(() => projectWrapper.current!.classList.remove('workRefresh'), 1)
        setOffsetX(0)
    }, [category])


    const onTouchMove = (e: TouchEvent | MouseEvent) => {
        setSelectable(false)

        const currentX = getTouchEventData(e).clientX;
        const diff = getRefValue(startXRef) - currentX;
        let newOffsetX = getRefValue(currentOffsetX) - diff


        const maxOffsetX = 0;
        const minOffsetX = getRefValue(minOffsetXRef);

        if (newOffsetX > maxOffsetX) {
            newOffsetX = maxOffsetX;
        }

        if (newOffsetX < minOffsetX) {
            newOffsetX = minOffsetX;
        }

        setOffsetX(newOffsetX)
    }

    const onTouchEnd = () => {
        setSelectable(true)
        setIsSwiping(false)
        const newContainerWidth = projectCard.current!.clientWidth * projectWrapper.current!.children.length
        const containerWidth = projectCard.current!.offsetWidth + 25;
        let newOffsetX = getRefValue(offsetXRef);
        newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
        setOffsetX(newOffsetX);
        window.removeEventListener('touchend', onTouchEnd);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('mouseup', onTouchEnd);
        window.removeEventListener('mousemove', onTouchMove);
    }

    const onTouchStart = (
        e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
    ) => {
        setIsSwiping(true)
        const containerEl = getRefValue(projectWrapper)
        minOffsetXRef.current = containerEl.offsetWidth - containerEl.scrollWidth;
        currentOffsetX.current = getRefValue(offsetXRef);
        startXRef.current = getTouchEventData(e).clientX
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', onTouchEnd);
        window.addEventListener('mousemove', onTouchMove);
        window.addEventListener('mouseup', onTouchEnd);
    }

    return (
        <div ref={projectContainer}
            className="ProjectsContainer overflow-hidden w-full h-full max-w-full z-10"
            onMouseDown={onTouchStart}
            onTouchStart={onTouchStart}
        >

            <div id='projectWrapper' ref={projectWrapper} className={`projectsTrack   / flex md:justify-start  /
              min-w-full w-full p-0 m-0 flex-nowrap gap-8   touch-none 
               ${category ? "translate-x-0" : "translate-x-full"}
               ${isSwiping? "" : "transition duration-300 ease-out"}   `}
                style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
            >

                {
                    projects.map((project: Project, i: number) => {
                        if (category == "Shopify") {

                            return (
                                project.projectCategory == "shopify" &&
                                <div className={`projectCardWrapper h-96 max-w-lg  snap-center  flex-shrink-0 ${category ? 'viewWork' : 'offWorkLeft'} cursor-pointer `} >
                                    <ProjectCard index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url} selectable={selectable} />
                                </div>
                            )
                        }
                        else if (category == "Full-Stack") {
                            return (
                                project.projectCategory == "full-stack" &&
                                <div className={` projectCardWrapper h-96 max-w-lg  snap-center  flex-shrink-0 ${category ? 'viewWork' : 'offWorkLeft'} cursor-pointer`} >
                                    <ProjectCard index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url} selectable={selectable} />
                                </div>
                            )
                        }
                        else if (category == "All") {
                            return (
                                <div ref={projectCard} className={`projectCardWrapper snap-center  h-96 max-w-lg   flex-shrink-0 ${selectable? "pointer-events-auto" : "pointer-events-none"}  ${category ? 'viewWork' : 'offWorkLeft'} cursor-pointer`}  >
                                    <ProjectCard  index={project.index} title={project.title} typeOfwork={project.typeOfwork} password={project.password} imgPath={project.imgPath} projectUrl={project.url} selectable={selectable} />
                                </div>
                            )
                        }

                    })
                }

            </div>

        </div>
    )
}