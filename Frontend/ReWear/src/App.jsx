import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Laddingpage from './constructor/home/Laddingpage'
import Category from './constructor/home/Category'
import CategoryFull from './constructor/home/CategoryFull'
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* other routes */}
    </Routes>
  )
}

export default App
