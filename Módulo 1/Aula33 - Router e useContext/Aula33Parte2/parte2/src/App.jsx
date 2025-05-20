import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Essa é a página inicial</h1>
      <BrowserRouter>
      <AppRouter/>
      </BrowserRouter>
    </>
  )
}

export default App
