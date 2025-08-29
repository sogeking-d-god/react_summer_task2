import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/component1/Componet1'
import Component2 from './components/component2/Component2'
import Component3 from './components/component3/Component3'
import Component4 from './components/component4/Component4'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App cf'>
      <Component4 selectMultipleArr={["item1", "item2", "item3", "item4"]} categoryOptionsArr={[{name: "cat1", value: "1"}, {name: "cat2", value: "2"}, {name: "cat3", value: "3"}]}/>
    </div>
  )
}

export default App
