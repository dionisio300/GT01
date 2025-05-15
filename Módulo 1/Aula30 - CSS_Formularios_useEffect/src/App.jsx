import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './components/Componente1'
import Formulario from './components/Formulario'
function App() {
  

  return (
    <>
    {/* CSS Global 
      Ediando o index.css
    */}
    <h1>Título 1</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla dolores optio saepe voluptas dolor, rem error ex tempore! Error voluptatibus recusandae placeat enim! Non culpa velit libero at dolor.
    </p>
    <p className='paragrafo2'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem sit soluta, dignissimos hic expedita eveniet delectus tempora fuga quia ex atque animi accusamus quibusdam voluptatum temporibus debitis saepe vel repellendus!
    </p>

    {/* CSS de componente */}
    <Componente1/>
    <Formulario/>
      
    </>
  )
}

export default App
