import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/contato' element={<Contato/>}/>
    </Routes>
  )
}

export default AppRoutes