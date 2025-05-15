import { useState } from "react"

const Formulario = () => {

  let [nome, setNome] = useState('')
  let [email,setEmail] = useState('')
  

  return (
    <div>
        <form>
            <label htmlFor="nome">Nome: </label>

            <input onChange={(e) => setNome(e.target.value)} type="text" name='nome' id='nome'/> <br />


            <label htmlFor="">E-mail:</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />
            <h1>Nome digitado = {nome}</h1>
            <h1>E-mail digitado = {email}</h1>
            
        </form>
    </div>
  )
}

export default Formulario