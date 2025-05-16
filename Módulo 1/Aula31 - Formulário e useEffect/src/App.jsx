import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Perfil from './components/Perfil'

function App() {

  let [user,setUser] = useState('')

  let [senha,setSenha] = useState('')

  let [logado, setLogado] = useState(false)

  let usuarios = [
    {user:'maria', senha:'123'},
    {user:'João', senha:'456'},
    {user:'pedro', senha:'789'},
    {user:'tiago', senha:'987'},
  ]

  function click(e){
    e.preventDefault()
    console.log(user)
    console.log(senha)

    usuarios.forEach((usuario) => {
      if(usuario.user == user){
        if(usuario.senha === senha){
          console.log('Usuario Logado')
          setLogado(true)
        }else{
          console.log('Senha errada')
        }
      }
    })
    if(logado == false){
      console.log('Usuario não encontrado')
    }

  }

  function renderizarPerfil(){
    if(logado == true){
      return <Perfil/>
    }else{
      return <>Ainda não logado</>
    }
  }
  
  return (
    <>
      <h1>Tela de Login</h1>
      <form>

        <div>
          <label htmlFor="">Usuário: </label>
          <input onChange={(e) => setUser(e.target.value)} type="text" name='user' id ='user' />
        </div>
        <div>
          <label htmlFor="">Senha: </label>
          <input onChange={(e) => setSenha(e.target.value)} type="password" name='senha' id ='senha' />
        </div>

        <button onClick={(e) => click(e)} type='submit'>Logar</button>
      </form>

      {logado ? <Perfil nome = {user}/>:<h1>Não logado</h1>}
    </>
  )
}

export default App
