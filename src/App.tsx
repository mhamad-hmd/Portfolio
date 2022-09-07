import './App.scss'
import { Greeting } from './components/greeting/greeting'
import { DisplayProjects } from './components/DisplayProjects/displayProjects'
import { AboutMe } from './components/AboutMe/aboutMe'
import { ParticlesBackground } from './components/Tsparticles/tsParticles'
import { ContactMe } from './components/ContactMe/contactMe'
import {HashRouter,  Router,Routes, Route,  } from 'react-router-dom';
import { SuccessPage } from './components/successPage/successPage';
import { SocialMedia } from './components/socialMedia/socialMedia'
import { useRef } from 'react'


function App() {

 


  return (
      <div className="App">
        
        <ParticlesBackground />
        
        <HashRouter >
          <Routes>

          <Route path="/" element = {<><Greeting /><DisplayProjects /><AboutMe /><ContactMe /> <SocialMedia/> </>} />

          <Route path="/success" element ={<SuccessPage/>} />
          </Routes> 

        </HashRouter>

        
      </div>
  )
}

export default App
