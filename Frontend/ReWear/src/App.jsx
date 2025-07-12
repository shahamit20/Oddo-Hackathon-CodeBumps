import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Laddingpage from './constructor/home/Laddingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Laddingpage/>
    </>
  )
}

export default App
