import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Laddingpage from './constructor/home/Laddingpage'
import Login from './pages/Login';
import Signup from './pages/Signup';

import Dashboard from './dashboard/Dashbord'

import AddProduct from './constructor/Product/AddProduct';
// import CategoryFull from './constructor/home/CategoryFull';


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      
      <Routes>
        <Route path="/" element={<Laddingpage />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/upload" element={<AddProduct />} /> 
        {/* <Route path="/categorise" element={<CategoryFull />} />  */}
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </>  )
}

export default App
