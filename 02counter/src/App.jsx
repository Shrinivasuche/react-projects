import { useState } from 'react'
import './App.css'

function App() {

  const [counter ,setCounter] = useState(10)
  //let counter = 10

  const addValue = () =>{
    setCounter((prevCounter)=> prevCounter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
  }
  const removeValue = () =>{
    setCounter(counter - 1)
    // setCounter(counter - 1)
    // setCounter(counter - 1)
    // setCounter(counter - 1)
    // setCounter(counter - 1)
    // setCounter(counter - 1)
    //if you write this the react uses a algorithm called reconselation 
    // in which the react bundles everything togrther and sends it and 
    // says there is a same function and even the content of the function
  }

  return (
    <>
      <h1>React course</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>add value</button>{" "}
      <button
      onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
