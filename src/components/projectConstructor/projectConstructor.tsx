
import { useRef, useState } from 'react';
import './projectConstructor.scss'

type props = {
    title: string,
    typeOfwork: string,
    password: string,
    tools: string,
    aboutIt: string,
    imgPath: string,
    projectUrl: string,
    index: string,

}

export const ProjectConstructor = (props: props) => {

    const { title, typeOfwork, password, tools, aboutIt, imgPath, projectUrl, index } = props;
    const previewImg = useRef<HTMLImageElement>(null);
    const previewImgPosition = previewImg.current?.getBoundingClientRect().top!;
    let previewTranslate = 0 
    let previewScale = 1.2
    previewImgPosition && document.addEventListener('scroll', (e:any) => {
        if(previewImgPosition - window.scrollY > 0  && previewImgPosition - window.scrollY < 500){
            previewTranslate += .09
            previewImg.current!.style.transform = `scale(${previewScale}) translateY(${previewTranslate}%)`
        }
        else if(previewImgPosition - window.scrollY < 0 && previewImgPosition - window.scrollY > -500 ){
            previewTranslate -= .09
            previewImg.current!.style.transform = `scale(${previewScale}) translateY(${previewTranslate}%)`
        }
        else{
            previewImg.current!.style.transform = `scale(1.2)`
        }

    })
    




    return (
        <div className='projectWrapper flex  gap-8  m-auto pb-3  '>

            <div className='previewImgContainer'>
                <img ref={previewImg}  className='previewImg' src={imgPath} alt="" />
            </div>

            <div className="InfoContainer flex flex-col justify-between items-between gap-4 mt-4">
                <span>{index}</span>
                <h1 className='projectTitle'>{title}</h1>

                <div className='aboutIt flex flex-col gap-1'>
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

