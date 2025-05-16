import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [user,setUser] = useState('')

  let [senha,setSenha] = useState('')

  let usuario = [
    {user:'maria', senha:'123'},
    {user:'João', senha:'456'},
    {user:'pedro', senha:'789'},
    {user:'tiago', senha:'987'},
  ]

  function click(e){
    e.preventDefault()
    console.log(user)
    console.log(senha)
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
    





    </>
  )
}

export default App
