import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Aditya(){
  return (
    <>
      <card className = "card">
        <li>Hi</li>
        <li>Hi</li>
        <li>Hi</li>
      </card>
    </>
  )
}

function Prajyot(){
  return( 
    <>
      <div>
        <h1>Hi Prajyot</h1>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Aditya></Aditya>
      <Prajyot></Prajyot>
    </>
  )
}



export default App
