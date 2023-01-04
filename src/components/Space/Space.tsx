import React, { useRef } from 'react'
import { myParallax } from '../myParallax/myParallax'
import './space.scss'

const Space = () => {
    const space = useRef<null | HTMLDivElement>(null)



  return (
    <div ref={space} className='spaceContainer'>Space</div>
  )
}

export default Space