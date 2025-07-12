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
<<<<<<< HEAD
import AddProduct from './constructor/Product/AddProduct';
=======
>>>>>>> 007381de40d2936fa0be89798d4e04dc831f7de9
>>>>>>> 4679eca44b7196d74116c9996cb09b522e3ffd07

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
        <Route path="/upload" element={<AddProduct />} /> 
        {/* <Route path="/dashboard" element={<Dashboard />} />  */}
      </Routes>
    </>
>>>>>>> 007381de40d2936fa0be89798d4e04dc831f7de9
  )
}

export default App
