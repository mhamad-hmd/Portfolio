import React, { useEffect, useRef } from 'react'
import './uchihaEyes.scss'
import eye1 from '../../assets/eye1.png'
import eye2 from '../../assets/eye2.png'
import sharingan from '../../assets/sharingan.png'

const UchihaEyes = () => {

    const sharinganLeft = useRef<HTMLImageElement>(null)
    const sharinganRight = useRef<HTMLImageElement>(null)
    const sharinganBallRight = useRef<HTMLImageElement>(null)
    const sharinganBallLeft = useRef<HTMLImageElement>(null)
    let sharinganRotate = 0


    // const cursorTarget = (e: any, element: any) => {
    //     let x = element.current!.getBoundingClientRect().left + element.current!.clientWidth / 2;
    //     let y = element.current!.getBoundingClientRect().top + element.current!.clientHeight / 2;
    //     let radian = Math.atan2(e.pageX - x, e.pageY - y);
    //     let rotate = radian * (180 / Math.PI) * -1 + 270;
    //     console.log(rotate)
    //     element.current!.style.transform = "rotate(" + rotate + "deg)";
    // }

    const cursorTarget = (e: any, element:any) => {
        let mouseX = element.current!.getBoundingClientRect().right;
        let mouseY = element.current!.getBoundingClientRect().top;
        let radianDegrees = Math.atan2(e.clientX - mouseX, e.clientY - mouseY);
        let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 270;
        element.current!.style.transform = `rotate(${rotationDegrees}deg)`
    }

    const sharinganScroll = (element:any) => {
        sharinganRotate++
        element.current!.style.transform = `rotate(${sharinganRotate}deg)`
    }

    // function eyeball() {
    //     eye.forEach(function (eye) {
    //       let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    //       let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    //       let radian = Math.atan2(event.pageX - x, event.pageY - y);
    //       let rotate = radian * (180 / Math.PI) * -1 + 270;
    //       eye.style.transform = "rotate(" + rotate + "deg)";
    //     });
    //   }

    useEffect(() => {
        window.addEventListener('mousemove', (e) => cursorTarget(e, sharinganLeft))
        window.addEventListener('mousemove', (e) => cursorTarget(e, sharinganRight))
        window.addEventListener('scroll', (e) => sharinganScroll(sharinganBallRight))
        window.addEventListener('scroll', (e) => sharinganScroll(sharinganBallLeft))
    }, [])

    return (
        <div className='eyesContainer'>
            <div className="eyesWrapper">
                <div className='leftEyeContainer relative / flex justify-center items-center /'>
                    <img src={eye1} alt="" />
                    <div ref={sharinganLeft} className="sharinganWrapper">
                        <img ref={sharinganBallLeft}  className='sharingan' src={sharingan} alt="" />
                    </div>
                </div>
                <div className="rightEyeContainer relative / flex justify-center items-center /">
                    <img src={eye2} alt="" />
                    <div ref={sharinganRight} className="sharinganWrapper">
                        <img ref={sharinganBallRight}  className='sharingan' src={sharingan} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UchihaEyes
