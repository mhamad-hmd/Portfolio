import './App.scss'
import { Greeting } from './components/greeting/greeting'
import { DisplayProjects } from './components/DisplayProjects/displayProjects'
import { AboutMe } from './components/AboutMe/aboutMe'
import { ParticlesBackground } from './components/Tsparticles/tsParticles'
import { ContactMe } from './components/ContactMe/contactMe'
import {BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { SuccessPage } from './components/successPage/successPage';
import { SocialMedia } from './components/socialMedia/socialMedia'
import { useRef } from 'react'
import Scrollbar from 'smooth-scrollbar';


function App() {

  const options = {
    "damping": 0.1,
    "alwaysShowTracks": true
  }



  return (
    <Router>
    <div id="my-scrollbar" className="App">
     
        {/* <ParticlesBackground /> */}

        <Routes>

          <Route path="/" element={<><Greeting /><DisplayProjects /><AboutMe /><ContactMe /> <SocialMedia /> </>} />
          <Route path="/success" element={<SuccessPage />} />


        </Routes>
      

    </div>
    </Router>
  )
}

export default App
