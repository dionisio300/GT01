import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Perfil from './components/Perfil'

function App() {

  let usuarios = [
    {user:'maria', senha:'123'},
    {user:'joao', senha:'456'}
  ]

  let [logado,setLogado] = useState(false)
  let [user, setUser] = useState("")
  let [senha, setSenha] = useState("")

  function validarUsuario(){
    usuarios.forEach((usuario) => {
      if(usuario.user === user){
        if(usuario.senha === senha){
          setLogado(true)
          console.log('Logado')
          setUser('')
          setSenha('')
        }
      }
    })
  }
  return (
    <>
      <h1>Login:</h1>
      <label className='' htmlFor="user">Usuario: </label> <br />
      <input value={user} onChange={(e) => setUser(e.target.value)} type="text" id='user' name='user'/> <br /><br />

      <label htmlFor="senha">Senha: </label> <br />
      <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" id='senha' name='senha'/> <br /><br />

      <button onClick={validarUsuario}>Enviar</button>
      <br />

      {logado && (<Perfil/>)}
      

    </>
  )
}

export default App
