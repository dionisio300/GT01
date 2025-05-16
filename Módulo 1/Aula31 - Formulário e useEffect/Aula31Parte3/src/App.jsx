import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BuscaCEP from './components/BuscaCEP'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Busca de endereço pelo CEP</h1>
      <BuscaCEP/>
    </>
  )
}

export default App
