import React, { useState } from 'react'

const UsuarioEspecifico = () => {

let [id,setId] = useState()
let [usuario,setUsuario] = useState([''])
let [mostrarUsuario, setMostrarUsuario] = useState(false)

async function buscarUsuario() {
    try {
            const resposta = await fetch(`http://localhost:3000/usuarios/${id}`)
            const dados = await resposta.json()
            await setUsuario(dados)
            setMostrarUsuario(true)
        } catch (error) {
            console.log(error)
        }
}
console.log(usuario)
  return (
    <div>
        <h2>Digite o ID do usuario: </h2>
        <input onChange={(e) => {setId(e.target.value)}} type="number" max={5} placeholder='ID'/>
        <button onClick={buscarUsuario}>Buscar</button>

        {mostrarUsuario == true && 
        <div>
            Nome: {usuario[0].nome} <br />
            Tipo: {usuario[0].tipo} <br />
            Ativo: {usuario[0].ativo ? 'Ativo':'Inativo'}
        </div>
        }
        
    </div>
  )
}

export default UsuarioEspecifico