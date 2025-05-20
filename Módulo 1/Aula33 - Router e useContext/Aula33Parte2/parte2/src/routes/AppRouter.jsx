import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Login from '../pages/Login'
import Perfil from '../pages/Perfil'


const AppRouter = () => {
    let logado = true

  return (
    <Routes>
        <Route path='/' element={logado ? <Navigate to = '/perfil'/>: <Navigate to='/login' /> } />
        
        <Route path='/login' element={<Login/>} />
        <Route path='/perfil' element={<Perfil/>} />

    </Routes>
  )
}

export default AppRouter