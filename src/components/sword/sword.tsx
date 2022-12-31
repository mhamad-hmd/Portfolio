import './sword.scss'
import swordImg from '../../assets/bankaiSword.png'

import React, { useEffect, useRef, useState } from 'react'

const Sword = () => {

    const sword = useRef<HTMLImageElement>(null)
    const swordContainer = useRef<HTMLImageElement>(null)
    let turn = 0
    const [swordRotation, setSwordRotation] = useState(0)

const swordTarget = (e:any) => {
    let mouseX = sword.current!.getBoundingClientRect().right;
    let mouseY = sword.current!.getBoundingClientRect().top;
    let radianDegrees = Math.atan2(e.clientX - mouseX, e.clientY - mouseY);
    let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 - 10;
    setSwordRotation(rotationDegrees)
    sword.current!.style.transform = `translate(0px, 0px)  rotate(${rotationDegrees}deg)`;
}

const swordAttack = (e:any) => {
    window!.removeEventListener("mousemove", (e) => swordTarget(e) );
    console.log(e.pageY, e.pageX)
    sword.current!.style.transform = `translate(${e.pageX}px, ${e.pageY}px) rotate(${swordRotation}deg)`
    setTimeout(() => {
        sword.current!.style.transform = `translate(0px, 0px) rotate(${swordRotation}deg)`
        window!.addEventListener("mousemove", (e) => swordTarget(e) );
    }, 2000)
    // setTimeout(() => {
    //     window!.addEventListener("mousemove", (e) => swordTarget(e) );
    // }, 3000)

}

useEffect(() => {
    window!.addEventListener("mousemove", (e) => swordTarget(e) );

    window.onclick = (e) => swordAttack(e)

}, [])
    



  return (
        <img ref={sword} className='sword' src={swordImg} alt="" />
  )
}   

export default Sword

