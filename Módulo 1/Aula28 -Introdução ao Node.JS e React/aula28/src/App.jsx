import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Saudacao from './components/Saudacao'

function App() {

  let pessoas = [
    {nome:'Kratos', idade:50},
    {nome:'Mario', idade:30},
    {nome:'Peter Parker', idade:22}
  ]

  return (
    <>
      <Cabecalho/>
      <h1>Olá React</h1>
      
      <Saudacao pessoas = {pessoas}/>

      <Rodape/>

    </>
  )
}

export default App
