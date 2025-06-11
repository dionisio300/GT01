import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Perfil = () => {

    let {user, setUser} = useContext(UserContext)

    let usuario = JSON.parse(localStorage.getItem('usuario'))

  return (
    <div>
        Essa é a página do perfil do {usuario.nome}
        <p>Esse é o email do {usuario.nome} = {usuario.tipo}</p>
    </div>
  )
}

export default Perfil