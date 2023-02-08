import './App.scss'
import { AboutMe } from './components/AboutMe/aboutMe'
import { ParticlesBackground } from './components/Tsparticles/tsParticles'
import { ContactMe } from './components/ContactMe/contactMe'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SuccessPage } from './components/successPage/successPage';
import { SocialMedia } from './components/socialMedia/socialMedia'
import { useEffect, useRef, useState } from 'react'
import Header from './components/Header/Header'
import Display from './components/Display/Display'
import Home from './components/Home/Home'
import DisplayProjects from './components/DisplayProjects/displayProjects';


function App() {


const {display, changeDisplay} = DisplayRoute();
console.log(display)
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={
            <div className='mainPageContainer max-h-screen overflow-hidden relative'>
              <Header display={display} changeDisplay={changeDisplay} />
              <Display>
                <Home className={`${display === "Home" ? "scale-100 z-40 opacity-100" : "scale-0 invisible z-10 opacity-0"}`} />
                <DisplayProjects  className={`${display === "Projects" ? "scale-100 z-40 opacity-100" : "scale-0 invisible z-10opacity-0"}`} />
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

export  function DisplayRoute (){
  const [display, setDisplay] = useState('Home')

  const changeDisplay = (route:string) =>{
    setDisplay(route)
  }
  return{
    display,
    changeDisplay
  }

}
