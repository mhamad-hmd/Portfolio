import { useState } from 'react'
import './App.scss'
import { Greeting } from './components/greeting/greeting'
import {DisplayProjects} from './components/DisplayProjects/displayProjects'
import { AboutMe } from './components/AboutMe/aboutMe'
import {ParticlesBackground} from './components/Tsparticles/tsParticles'


function App() {

  


  return (
    <div className="App">
        <ParticlesBackground/>
        {Greeting()}
        {DisplayProjects()}
        {AboutMe()}
     
    </div>
  )
}

export default App
