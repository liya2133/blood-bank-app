import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ViewBank from './components/ViewBank'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddDonor from './components/AddDonor'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<AddDonor/>}/>
        <Route path='/view' element ={<ViewBank/>}/>
        </Routes></BrowserRouter>
    </>
  )
}

export default App
