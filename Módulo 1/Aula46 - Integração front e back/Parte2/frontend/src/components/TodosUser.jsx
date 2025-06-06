import React from 'react'
import { useEffect, useState } from 'react'

const TodosUser = () => {

    let [usuarios,setUsuarios] = useState([])
    useEffect(() => {
        const buscarUsuario = async () => {
        try {
            const resposta = await fetch('http://localhost:3000/usuarios')
            const dados = await resposta.json()
            setUsuarios(dados)
        } catch (error) {
            console.log(error)
        }
        }
        buscarUsuario()
    },[])

  return (
    <div>
        <h1>Aqui está a lista de usuários</h1>
        <ul>
            {usuarios.map((usuario) => (
            <li key={usuario.id} >{usuario.nome} - {usuario.tipo}</li>
            ))}
        </ul>
        
    </div>
  )
}

export default TodosUser