import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './contexts/UserContext'
import NavAluno from './components/NavAluno'
//teste
function App() {
  let logado = ''
  return (
    <>
    <UserProvider>
      <BrowserRouter>
        {logado == 'admin' && <Navbar/>}
        {logado == 'aluno' && <NavAluno/>}
        <AppRoutes/>
      </BrowserRouter>
      
    </UserProvider>
      
    </>
  )
}

export default App
