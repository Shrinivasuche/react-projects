import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    name: 'shrinivas',
    age : 22,
    address: {
      city: 'bengaluru',
      state: 'Karnataka',
      country: 'India'
    }
  }

  let newArr = [1,2,3,4,5,6,7]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>vite with tailwind</h1>
      <Card userName="shrinivas" myArr={newArr}/>
      <Card userName="shrinivas" post='staff engineer'/>
    </>
  )
}

export default App
