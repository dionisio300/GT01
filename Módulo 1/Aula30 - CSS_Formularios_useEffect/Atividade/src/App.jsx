import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Perfil from './components/Perfil'
import Projetos from './components/Projetos'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Perfil do Freelancer</h1>
      <Perfil />
      <Projetos />
      <Formulario/>
    </>
  )
}

export default App
