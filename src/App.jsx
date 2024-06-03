import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1);
  }


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {handleClick()}}>+</button>
    </div>
  );
}

export default App
