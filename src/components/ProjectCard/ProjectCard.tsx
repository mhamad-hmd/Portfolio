
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { myParallax } from '../myParallax/myParallax';
import royalCoats from '../../assets/royal-coats.png'
import './projectCard.scss'
import { Link } from 'react-router-dom';

type props = {
    title: string,
    typeOfwork: string,
    password: string,
    imgPath: string,
    projectUrl: string,
    index: string,
    selectable:boolean
}

export const ProjectCard = (props: props) => {
    const { title, typeOfwork, password, imgPath, projectUrl, index, selectable } = props;
    const previewImg = useRef<HTMLImageElement>(null);
    const infoContainer = useRef<HTMLDivElement>(null);
    // const { ref: displayRef, inView: myElementIsVisible } = useInView();
    const displayRef = useRef<null | HTMLAnchorElement>(null)
    
    useEffect(() => {
        displayRef.current!.ondragstart = () => {return false}

    }, [])



    return (
        <a  ref={displayRef} href={projectUrl} className={`projectWrapper select-none  h-full  relative   `} >

            <img ref={previewImg} unselectable='on' id="previewImg" width={2400} className='previewImg  select-none pointer-events-none h-full w-full max-w-xs max-h-56 md:max-w-lg md:max-h-full   object-cover object-center ' src={imgPath} alt="" aria-disabled />

            <div ref={infoContainer} unselectable='on' className={`InfoContainer   absolute top-0   flex flex-col gap-4 md:gap-8 h-full w-full p-4 bg-black/40  backdrop-blur-[1px] `}>
                <span className=' mainFont mainColor text-lg sm:text-3xl'>{index}</span>

                <div className={`aboutIt flex flex-col  scndryFont  mainColor font-light text-lg`}>
                    <h1 className='projectTitle mainFont mainColor text-3xl sm:text-6xl '>{title}</h1>
                    <div className='flex flex-col gap-1 px-2 text-sm sm:text-lg '>
                        <h4 className='typeOfWork  '>{typeOfwork}</h4>
                        {password.length > 0 &&
                            <span>Password: {password}</span>
                        }
                    </div>
                </div>


            </div>

        </a>
    )
}

