import './sword.scss'
import swordImg from '../../assets/bankaiSword.png'
import polyGon from '../../assets/Polygon.png'

import React, { useEffect, useRef, useState } from 'react'

const Sword = () => {

    const sword = useRef<HTMLImageElement>(null)
    const swordContainer = useRef<HTMLImageElement>(null)
    const swordEffect = useRef<HTMLImageElement>(null)
    let turn = 0
    const [swordRotation, setSwordRotation] = useState(Number)
    let rotationDegrees = 0

    const swordTarget = (e: any, element:any) => {
        let mouseX = element.current!.getBoundingClientRect().right;
        let mouseY = element.current!.getBoundingClientRect().top;
        let radianDegrees = Math.atan2(e.clientX - mouseX, e.clientY - mouseY);
        rotationDegrees = radianDegrees * (180 / Math.PI) * -1;
        element.current!.style.transform = `rotate(${rotationDegrees}deg)`
    }
    
    const swordAttack = (e: any) => {
        sword.current!.classList.add('swordAttack')
        const resetSword = setTimeout(() => {
            sword.current!.classList.remove('swordAttack')
            // swordEffect.current!.style.translate = `50vw 200px`
        }, 4000)


    }

    useEffect(() => {

        window.addEventListener('click', (e) => swordAttack(e))

        return () => { window.removeEventListener("mousemove", (e) => swordTarget(e, sword)) }

    }, [])




    return (

            <div className='swordMedia sword' ref={sword}>
                <img src={swordImg} alt="" />
            </div>
            // {/* <img ref={swordEffect} className="swordEffect" src={polyGon} alt="" /> */}
    )
}

export default Sword

