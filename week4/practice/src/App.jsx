import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  const increment = () => {
    setCount(count+1);
  }
  const decrement = () =>{
    setCount(count-1);
  }
  return (
    <div className='Counter'>
      <h1>Counter Application</h1>
      <p>Count : {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default App
