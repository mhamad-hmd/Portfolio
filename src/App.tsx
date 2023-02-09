import './App.scss'
import { ParticlesBackground } from './components/Tsparticles/tsParticles'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SuccessPage } from './components/successPage/successPage';
import { SocialMedia } from './components/socialMedia/socialMedia'
import { useEffect, useRef, useState } from 'react'
import Header from './components/Header/Header'
import Display from './components/Display/Display'
import Home from './components/Home/Home'
import DisplayProjects from './components/DisplayProjects/displayProjects';
import ContactMe from './components/ContactMe/contactMe';
import AboutMe from './components/AboutMe/aboutMe';
import WelcomePage from './components/WelcomePage/WelcomePage';


function App() {


  const { display, changeDisplay } = DisplayRoute();
  console.log(display)
  return (
    <Router>
      <WelcomePage />
      <div className="App h-full p-8 md:p-12 ">
        <Routes>

          <Route path="/" element={
            <div className='mainPageContainer  overflow-hidden relative / flex flex-col gap-2 / border border-scndryColor h-full '>
              <ParticlesBackground />
              <Header display={display} changeDisplay={changeDisplay} />
              <Display>
                <Home className={`${display === "Home" ? "scale-100 z-40 opacity-100 translate-x-0" : "scale-60 translate-x-2/3 invisible z-10 opacity-0"}`} />
                <DisplayProjects className={`${display === "Projects" ? "scale-100 z-40 opacity-100 translate-x-0" : "scale-60 invisible z-10 translate-x-2/3  opacity-0"}`} />
                <AboutMe className={`${display === "Info" ? "scale-100 z-40 opacity-100 translate-x-0" : "scale-60 invisible z-10 translate-x-2/3  opacity-0"}`} />
                <ContactMe className={`${display === "Contact" ? "scale-100 z-40 opacity-100 translate-x-0" : "scale-60 invisible z-10 translate-x-2/3  opacity-0"}`} />
              </Display>

            </div>
          } />
          <Route path="/success" element={<SuccessPage />} />


        </Routes>


      </div>
    </Router>
  )
}

export default App;

export function DisplayRoute() {
  const [display, setDisplay] = useState('Home')

  const changeDisplay = (route: string) => {
    setDisplay(route)
  }
  return {
    display,
    changeDisplay
  }

}
