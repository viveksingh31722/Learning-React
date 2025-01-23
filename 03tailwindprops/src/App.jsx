import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username:"vivek",
    age:23
  }

  let newArray = [1, 2, 4, 3];

  return (
    <> 

      <h1 className='bg-green-700 text-black p-4 rounded-full'>Tailwind test</h1>
      <Card userName="Vivek Singh" btnText="click me" Obj = {myObj} />
      <Card userName="Rishu Singh" btnText="visit me" />
        
    </>
  )
}

export default App
