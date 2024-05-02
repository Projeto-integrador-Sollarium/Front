import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Sobre from './Pages/Sobre/Sobre'
import Contato from './Pages/Contato/Contato'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contato />
    </>
  )
}

export default App
