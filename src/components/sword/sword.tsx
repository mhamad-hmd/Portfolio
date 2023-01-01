import './sword.scss'
import swordImg from '../../assets/bankaiSword.png'

import React, { useEffect, useRef, useState } from 'react'

const Sword = () => {

    const sword = useRef<HTMLImageElement>(null)
    const swordContainer = useRef<HTMLImageElement>(null)
    const swordEffect = useRef<HTMLImageElement>(null)
    let turn = 0
    const [swordRotation, setSwordRotation] = useState(Number)
    let rotationDegrees = 0

    const swordTarget = (e: any) => {
        let mouseX = sword.current!.getBoundingClientRect().right;
        let mouseY = sword.current!.getBoundingClientRect().top;
        let radianDegrees = Math.atan2(e.clientX - mouseX, e.clientY - mouseY);
        rotationDegrees = radianDegrees * (180 / Math.PI) * -1 -10;
        sword.current!.style.transform = `rotate(${rotationDegrees}deg)`
    }
    
    const swordAttack = (e: any) => {
        console.log(swordRotation)
        sword.current!.style.translate = `${e.x}px ${e.y - 200}px`
        sword.current!.classList.add('swordAnimate')
        
        // const resetSword = setTimeout(() => {
        //     sword.current!.classList.remove('swordAnimate')
        //     sword.current!.style.translate = `50vw`
        // }, 2000)


    }

    useEffect(() => {
        window!.addEventListener("mousemove", (e) => swordTarget(e));

        window.addEventListener('click', (e) => swordAttack(e))

        return () => {window.removeEventListener("mousemove", (e) => swordTarget(e))}

    }, [])




    return (
        <div ref={sword} className='sword' >
            {/* <span ref={swordEffect} className="swordEffect"></span> */}
            <img  className='swordMedia ' src={swordImg} alt="" />
        </div>
    )
}

export default Sword

