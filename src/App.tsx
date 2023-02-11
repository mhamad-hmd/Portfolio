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
import WelcomePage from './components/WelcomePage/WelcomePage';
import AboutMe from './components/AboutMe/AboutMe';


function App() {


  const { display, changeDisplay } = DisplayRoute();
  const [dark, setDark] = useState(false)
  return (
    <Router>
      <ParticlesBackground />
      <WelcomePage />
      <div  className="theme / absolute top-0 bottom-20 max-w-[9.1vw] w-full /  transition flex flex-col justify-end gap-16 font-bold mainFont  ">
        <div className=" flex -rotate-90 justify-center items-center gap-2  -ml-4 sm:ml-0 ">
          <input name='theme' checked={dark} type="radio" onClick={() => setDark(true)} />
          <label className={`${dark? "text-mainColor" : "text-scndryColor"} transition-all duration-1000 `} >DARK</label>
        </div>
        <div className=' flex -rotate-90 justify-center items-center gap-2 -ml-4 sm:ml-0'>
          <input name='theme' checked={!dark} type="radio" onClick={() => setDark(false)} />
          <label className={`${dark? "text-mainColor" : "text-scndryColor"} transition-all duration-1000 `}>LIGHT</label>
        </div>
      </div>
      <div className={`App h-full flex justify-center items-center transition-all ease-out duration-1000 ${dark ? "bg-dark" : "bg-mainColor"}   `}>
        <Routes>

          <Route path="/" element={
            <div className={`mainPageContainer  overflow-hidden relative / flex flex-col gap-2 md:gap-6 / border ${dark ? "border-scndryLightColor" : "border-scndryColor"} h-[93vh] max-w-[90vw] w-full `}>
              <Header dark={dark} display={display} changeDisplay={changeDisplay} />
              <Display>
                <Home dark={dark} className={`${display === "Home" ? "scale-100 z-40 opacity-100 translate-x-0" : "scale-60 translate-x-2/3 invisible z-10 opacity-0 pointer-events-none"}`} />
                <DisplayProjects dark={dark} className={`my-8 ${display === "Projects" ? "scale-100 z-40 opacity-100 translate-x-0" : "scale-60 invisible z-10 translate-x-2/3  opacity-0 pointer-events-none"}`} />
                <AboutMe dark={dark} className={`${display === "Info" ? "scale-100 z-40 opacity-100 translate-x-0" : "scale-60 invisible z-10 translate-x-2/3  opacity-0 pointer-events-none"}`} />
                <ContactMe dark={dark} className={`${display === "Contact" ? "scale-100 z-40 opacity-100 translate-x-0" : "scale-60 invisible  z-10 translate-x-2/3  opacity-0 pointer-events-none"}`} />
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
