import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/component1/Componet1'
import Component2 from './components/component2/Component2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App cf'>
      <Component2 fileArr={["images/Capture.PNG","file2"]}/>
    </div>
  )
}

export default App
