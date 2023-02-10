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
      <ParticlesBackground />
      <WelcomePage />
      <div className="App h-full flex justify-center items-center   ">
        <Routes>

          <Route path="/" element={
            <div className='mainPageContainer  overflow-hidden relative / flex flex-col gap-2 md:gap-8 / border border-scndryColor h-[95vh] w-[95vw] '>
              <Header display={display} changeDisplay={changeDisplay} />
              <Display>
                <Home className={`${display === "Home" ? "scale-100 z-40 opacity-100 translate-x-0" : "scale-60 translate-x-2/3 invisible z-10 opacity-0 pointer-events-none"}`} />
                <DisplayProjects className={`my-8 ${display === "Projects" ? "scale-100 z-40 opacity-100 translate-x-0" : "scale-60 invisible z-10 translate-x-2/3  opacity-0 pointer-events-none"}`} />
                <AboutMe className={`${display === "Info" ? "scale-100 z-40 opacity-100 translate-x-0" : "scale-60 invisible z-10 translate-x-2/3  opacity-0 pointer-events-none"}`} />
                <ContactMe className={`${display === "Contact" ? "scale-100 z-40 opacity-100 translate-x-0" : "scale-60 invisible z-10 translate-x-2/3  opacity-0 pointer-events-none"}`} />
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
