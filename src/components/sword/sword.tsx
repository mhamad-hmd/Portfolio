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
    sword.current!.style.transform = `rotate(${rotationDegrees}deg)`
}

const swordAttack = (e:any) => {
    console.log(e.y, e.x, e)
    sword.current!.style.translate = `${e.x}px ${e.y - 200}px`
    const resetSword = setTimeout(() => {
        sword.current!.style.translate = `50vw`
    }, 2000) 
    

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

