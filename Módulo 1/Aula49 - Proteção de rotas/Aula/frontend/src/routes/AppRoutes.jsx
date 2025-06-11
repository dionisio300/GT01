import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Aluno from '../pages/Aluno'
import Admin from '../pages/Admin'
import Professor from '../pages/Professor'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/perfil' element = {<Perfil/>} />
        <Route path='/aluno' element = {<Aluno/>} />
        <Route path='/admin' element = {<Admin/>} />
        <Route path='/professor' element = {<Professor/>} />
    </Routes>
  )
}

export default AppRoutes