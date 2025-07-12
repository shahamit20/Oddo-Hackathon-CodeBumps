import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Laddingpage from './constructor/home/Laddingpage'
import Dashboard from './dashboard/Dashbord'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Laddingpage />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </>
  )
}

export default App
