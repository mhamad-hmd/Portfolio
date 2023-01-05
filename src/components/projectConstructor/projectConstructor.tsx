
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { myParallax } from '../myParallax/myParallax';
import royalCoats from '../../assets/royal-coats.png'
import './projectConstructor.scss'

type props = {
    title: string,
    typeOfwork: string,
    password: string,
    imgPath: string,
    projectUrl: string,
    index: string,
    even: boolean,
    myParallaxView:boolean,
    scrollSpeed: number,
    mainProject: string
}

export const ProjectConstructor = (props: props) => {
    const { title, typeOfwork, password, imgPath, projectUrl, index, even, scrollSpeed, mainProject } = props;
    const previewImg = useRef<HTMLImageElement>(null);
    const infoContainer = useRef<HTMLDivElement>(null);
    const { ref: displayRef, inView: myElementIsVisible } = useInView();
    
    // myParallax(previewImg, scrollSpeed, myElementIsVisible)
    // myParallax(infoContainer, scrollSpeed, myElementIsVisible)

    
    return (
        <div ref={displayRef}  className={`projectWrapper flex  gap-8  m-auto pb-3 xs:flex-col xs:m-auto ${even ? "md:flex-row" : "md:flex-row-reverse"} ${mainProject? "mainTranslate" : ""}`} >

            <div className='previewImgContainer'>
                <img ref={previewImg} id="previewImg" className='previewImg' src={imgPath} alt="" aria-disabled />
            </div>

            <div ref={infoContainer} className={`InfoContainer flex flex-col justify-between items-between gap-4 mt-4  ${even ? "items-start" : "items-end"} ${mainProject? "visible" : "hidden"}`}>
                <span>{index}</span>
                <h1 className='projectTitle'>{title}</h1>

                <div className={`aboutIt flex flex-col gap-1  ${even ? "items-start" : "items-end"}`}>
                    <h2>Info:</h2>
                    <h4 className='typeOfWork'>{typeOfwork}</h4>
                    {password.length > 0 &&
                        <span>Preview Password: {password}</span>
                    }
                </div>


                <a href={projectUrl} className="w-full text-center mt-5 mb-2">
                    <button id='projectBtn' className='btn btnA m-auto text-center '>
                        <span className='mainFont'>
                            Preview
                        </span>
                    </button>
                </a>
            </div>

        </div>
    )
}

