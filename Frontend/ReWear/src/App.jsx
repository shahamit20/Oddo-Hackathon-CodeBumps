import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Laddingpage from './constructor/home/Laddingpage'
<<<<<<< HEAD
import Category from './constructor/home/Category'
import CategoryFull from './constructor/home/CategoryFull'
import Login from './pages/Login';
import Signup from './pages/Signup';
=======
import Dashboard from './dashboard/Dashbord'
>>>>>>> 007381de40d2936fa0be89798d4e04dc831f7de9

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* other routes */}
    </Routes>
=======
    <>
      
      <Routes>
        <Route path="/" element={<Laddingpage />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </>
>>>>>>> 007381de40d2936fa0be89798d4e04dc831f7de9
  )
}

export default App
