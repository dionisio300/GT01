import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Aluno from '../pages/Aluno'
import Admin from '../pages/Admin'
import Professor from '../pages/Professor'
import RotasProtegidas from './RotasProtegidas'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/perfil' element = {<Perfil/>} />

        <Route path='/aluno' element = {
          <RotasProtegidas>
              <Aluno/>
          </RotasProtegidas>
        } /> 


        <Route path='/admin' element = {
          <RotasProtegidas>
              <Admin/>
          </RotasProtegidas>
        } />

        <Route path='/professor' element = {
          <RotasProtegidas>
            <Professor/>
          </RotasProtegidas>
          } 
        />
    </Routes>
  )
}

export default AppRoutes