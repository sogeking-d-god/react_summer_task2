import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/component1/Componet1'
import Component2 from './components/component2/Component2'
import Component3 from './components/component3/Component3'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App cf'>
      <Component3 selectedValue={""} optionsArr={[{value:"1", name:"option 1"}, {value:"2", name:"option 2"}, {value:"3", name:"option 3"}]} />
    </div>
  )
}

export default App
