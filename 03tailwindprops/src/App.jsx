import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
     <h1 className='bg-green-400 text-black-500 p-4 rounded-2xl'>Tailwind</h1>
     <Card username="Shaurya" btnText= "Click MEE"/>
     <Card username="dggdgs"  />

     
    </>
  )
}

export default App
