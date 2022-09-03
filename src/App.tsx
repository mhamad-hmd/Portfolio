import { useState } from 'react'
import './App.scss'
import { Greeting } from './components/greeting/greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      
        {Greeting()}
      
     
    </div>
  )
}

export default App
