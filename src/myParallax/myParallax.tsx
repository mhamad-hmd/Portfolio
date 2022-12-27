import React, { Ref, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

export const myParallax = (element: any , scrollSpeed: number, visible: boolean) => {

    const [offsetY, setOffSetY] = useState(0)

    const handleScroll = () => setOffSetY( element.current.getBoundingClientRect().top)
    useEffect(() => {
        console.log(element.current.getBoundingClientRect().top)
        
        if(visible) {
            element.current.style.transform = `translateY(${offsetY * scrollSpeed}px)`
        }
        else if(!visible){
            null
        }
    }, [offsetY])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

}
