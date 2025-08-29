import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/component1/Componet1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App cf'>
      <Component1 className='cf' label1={"label-1"} label2={"label-2"} options_arr={["option 1", "option 2", "option 3"]}  />
    </div>
  )
}

export default App
