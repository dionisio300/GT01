import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <AppRoutes/>
      </BrowserRouter>
      <h1>React Router</h1>
    </>
  )
}
export default App
