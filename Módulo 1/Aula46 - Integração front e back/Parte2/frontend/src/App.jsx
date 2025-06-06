import { useEffect, useState } from 'react'
import './App.css'
import TodosUser from './components/TodosUser'
import UsuarioEspecifico from './components/UsuarioEspecifico'

function App() {
  let [mostrar,setMostrar] = useState(false)
  let [id,setId] = useState('')
  let [dadosUser, setDadosUser] = useState({nome:""})

  let [componente,setComponente] = useState()


  return (
    <>
      <h1>Selecione uma opção</h1>

      <button onClick={() => {setComponente('todos')}}>Todos os Usuarios</button>  
      <button onClick={() => {setComponente('um')}}>Exibir Usuario</button>
      <button onClick={() => {setComponente('cadastrar')}}>Cadastrar Usuario</button>
      <button onClick={() => {setComponente('atualizar')}}>Atualizar dados</button>
      <button onClick={() => {setComponente('deletar')}}>Deletar Usuario</button>
      <button onClick={() => {setComponente('')}}>Limpar tela</button>
      
      <div>
        {componente == 'todos' && <TodosUser/>}
        {componente == 'um' && <UsuarioEspecifico/>}
      </div>
    
      
      

    </>
  )
}

export default App
