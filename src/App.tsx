import { useState } from 'react'
import './App.scss'
import { Greeting } from './components/greeting/greeting'
import { DisplayProjects } from './components/DisplayProjects/displayProjects'
import { AboutMe } from './components/AboutMe/aboutMe'
import { ParticlesBackground } from './components/Tsparticles/tsParticles'
import { ContactMe } from './components/ContactMe/contactMe'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SuccessPage } from './components/successPage/successPage'


function App() {

  return (
    <Router>
      <div className="App">
        <ParticlesBackground />
        <Routes>

          <Route  path="/" element = {<><Greeting /><DisplayProjects /><AboutMe /><ContactMe /></>} />

          <Route path="/success" element ={<SuccessPage/>} />
          

        </Routes>
      </div>
    </Router>

  )
}

export default App
