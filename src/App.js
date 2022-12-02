import logo from './logo.svg';
import './App.css';
import './component/propTest'
import PropTest from './component/propTest';
import Testprops from './component/Testprops';
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  // const handleClick = () => {
  //   setCounter(counter + 1)


  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>

      <button onClick={() => setCounter(0)}>
        reset
      </button>

      <button onClick={() => setCounter(counter - 1)}>
        minus
      </button>
    </div>
  )
}

export default App
