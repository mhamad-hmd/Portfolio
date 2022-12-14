import './App.scss'
import { Greeting } from './components/greeting/greeting'
import { DisplayProjects } from './components/DisplayProjects/displayProjects'
import { AboutMe } from './components/AboutMe/aboutMe'
import { ParticlesBackground } from './components/Tsparticles/tsParticles'
import { ContactMe } from './components/ContactMe/contactMe'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SuccessPage } from './components/successPage/successPage';
import { SocialMedia } from './components/socialMedia/socialMedia'
import { useEffect, useRef } from 'react'
import Scrollbar from 'smooth-scrollbar';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {

  const parallaxRef = useRef<any>()

  
  const scrollArea = document.querySelector('.scroll-area') as HTMLElement



  // const Scroll = Scrollbar.init(scrollArea)
  
  // Scroll.addListener((s) => {
  //     console.log(s.offset.y) // returns “scrollTop” equivalent
  // })


// console.log(parallaxRef)
  useEffect(() => {
    if (!parallaxRef.current || !parallaxRef.current.container) return
    console.log(parallaxRef.current.container)
    parallaxRef.current.container.onscroll = () => {
      console.log("scrolll")
    }
  })


  // parallaxContainer.current.container.current  

const options = {
  "damping":0.1,
  "alwaysShowTracks": true
}

  Scrollbar.init(document.querySelector('#my-scrollbar')!, options);
  Scrollbar.addEventListener("click",() => console.log("helo"));



  return (
    <Router>
      <div  className="App">

        {/* <ParticlesBackground /> */}

        <Routes>

          <Route path="/" element={
            <div  id='parallexxx' ref={parallaxRef}>

              {/* <ParallaxLayer offset={0} speed={1}> */}
                <Greeting />
              {/* </ParallaxLayer> */}

              {/* <ParallaxLayer offset={1} speed={.3}> */}
                <DisplayProjects/>
              {/* </ParallaxLayer> */}
              
              {/* <ParallaxLayer offset={4} speed={.3}> */}
                <AboutMe />
              {/* </ParallaxLayer> */}

              {/* <ParallaxLayer offset={4.9} speed={.3}> */}
                <ContactMe />
              {/* </ParallaxLayer> */}

              {/* <ParallaxLayer offset={5.8} speed={1}> */}
                <SocialMedia />
              {/* </ParallaxLayer> */}
              
            </div>
            }/>
          <Route path="/success" element={<SuccessPage />} />


        </Routes>


      </div>
    </Router>
  )
}

export default App
