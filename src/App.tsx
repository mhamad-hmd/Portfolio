import { useState } from 'react'
import './App.scss'
import { Greeting } from './components/greeting/greeting'
import {DisplayProjects} from './components/DisplayProjects/displayProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

        
        {Greeting()}
        {DisplayProjects()}
     
    </div>
  )
}

export default App
