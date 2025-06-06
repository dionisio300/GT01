import { useEffect, useState } from 'react'
import './App.css'
import TodosUser from './components/TodosUser'

function App() {
  let [mostrar,setMostrar] = useState(false)
  let [id,setId] = useState('')
  let [dadosUser, setDadosUser] = useState({nome:""})

  let [mostrarUser,setMostrarUser] = useState(false)

  function mostrarUsuarios(){
    if(mostrar){
      setMostrar(false)
    }else{
      setMostrar(true)
    }
  }

  

  return (
    <>
      <h1>Selecione uma opção</h1>
      <button onClick={mostrarUsuarios}>Todos os Usuarios</button>
      <h2>Digite o id do usuario</h2>

      <input onChange={e => setId(e.target.value)} type="text" />

      <button onClick={buscarUsuario} >Buscar Usuario</button>

      {mostrar ? <TodosUser/>:''}
      

    </>
  )
}

export default App
