
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { myParallax } from '../myParallax/myParallax';
import './projectConstructor.scss'

type props = {
    title: string,
    typeOfwork: string,
    password: string,
    tools: string,
    imgPath: string,
    projectUrl: string,
    index: string,
    even: boolean,
    myParallaxView:boolean,
    scrollSpeed: number,
}

export const ProjectConstructor = (props: props) => {

    const { title, typeOfwork, password, imgPath, projectUrl, index, even, scrollSpeed } = props;
    const previewImg = useRef<HTMLImageElement>(null);
    const infoContainer = useRef<HTMLDivElement>(null);
    const previewImgPosition = previewImg.current?.getBoundingClientRect().top!;
    const { ref: displayRef, inView: myElementIsVisible } = useInView();
    myParallax(previewImg, scrollSpeed, myElementIsVisible)
    myParallax(infoContainer, scrollSpeed, myElementIsVisible)

    let previewTranslate = 0;
    let infoTranslate = 0;
    let previewScale = 1.2;
    let lastScrollTop = 0;

    

    // previewImgPosition && parallax.current.container.current!.addEventListener('scroll', (e: any) => {
    //     if (previewImgPosition - window.scrollY < 830 && previewImgPosition - window.scrollY > -630) {
    //         const st = window.pageYOffset
    //         if (st > lastScrollTop) {
    //             previewTranslate += .099
    //             infoTranslate += .03
    //             previewImg.current!.style.transform = `scale(${previewScale}) translateY(${previewTranslate}%)`
    //             infoContainer.current!.style.transform = `translateY(${infoTranslate}%)`
    //         } else if (st < lastScrollTop) {
    //             previewTranslate -= .09
    //             infoTranslate -= .03
    //             previewImg.current!.style.transform = `scale(${previewScale}) translateY(${previewTranslate}%)`
    //             infoContainer.current!.style.transform = `translateY(${infoTranslate}%)`
    //             console.log('up')
    //         }

    //         lastScrollTop = st <= 0 ? 0 : st
    //     }


    // })

 document.getElementById('previewImg')?.getBoundingClientRect


    return (
        <div ref={displayRef}  className={`projectWrapper flex  gap-8  m-auto pb-3  ${even ? "flex-row" : "flex-row-reverse"}`} >

            <div className='previewImgContainer'>
                <img ref={previewImg} id="previewImg" className='previewImg' src={imgPath} alt="" />
            </div>

            <div ref={infoContainer} className={`InfoContainer flex flex-col justify-between items-between gap-4 mt-4  ${even ? "items-start" : "items-end"}`}>
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
                        Preview
                    </button>
                </a>
            </div>

        </div>
    )
}

