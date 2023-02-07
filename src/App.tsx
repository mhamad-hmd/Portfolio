import './App.scss'
import { DisplayProjects } from './components/DisplayProjects/displayProjects'
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


function App() {
const {display, changeDisplay} = DisplayRoute();
console.log(display)
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={
            <div className='mainPageContainer max-h-screen overflow-hidden'>
              <Header display={display} changeDisplay={changeDisplay} />
              <Display>
                <Home className={`${display === "Home" ? "scale-100" : "scale-0"}`} />
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
