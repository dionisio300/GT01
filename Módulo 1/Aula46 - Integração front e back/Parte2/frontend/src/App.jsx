import { useEffect, useState } from 'react'
import './App.css'
import TodosUser from './components/TodosUser'

function App() {
  let [mostrar,setMostrar] = useState(false)
  let [id,setId] = useState('')
  let [dadosUser, setDadosUser] = useState({nome:""})

  let [componente,setComponente] = useState()


  return (
    <>
      <h1>Selecione uma opção</h1>

      <button onClick={() => {setComponente()}}>Todos os Usuarios</button>  
      <button>Exibir Usuario</button>
      <button>Cadastrar Usuario</button>
      <button>Atualizar dados</button>
      <button>Deletar Usuario</button>


      {mostrar ? <TodosUser/>:''}
      

    </>
  )
}

export default App
