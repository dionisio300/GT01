import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho/>
      <h1>Olá React</h1>
      <Rodape/>

    </>
  )
}

export default App
