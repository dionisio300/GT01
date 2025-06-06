import React, { useState } from 'react'

const CadastroUser = () => {
    let [userName,setUsername] = useState()
    let [nome,setNome] = useState()
    let [senha,setSenha] = useState()
    let [ativo,setAtivo] = useState()
    let [tipo,setTipo] = useState()


    async function enviarDados() {
        try {
            const resposta = await fetch('http://localhost:3000/cadastrarUsuario',
                {
                    method:'POST',headers:{'Content-Type':'application/json'
                },
                body: JSON.stringify(
                    {username:userName,nome:nome,senha:senha,ativo:ativo,tipo:tipo}
                )})
                console.log(resposta.status)
                setUsername('')
                setNome('')
                setSenha('')
                setAtivo('')
                setTipo('')

        } catch (error) {
            
        }
    }


  return (
    <div>
        <h2>Cadastrar Usuario</h2>
        <div>
            <div>
                <label htmlFor="">Nome de Usuário: </label>
                <input value={userName} onChange={(e) => {setUsername(e.target.value)}} type="text" />
            </div>
            <br />
            <div>
                <label htmlFor="">Nome: </label>
                <input value={nome} onChange={(e) => {setNome(e.target.value)}} type="text" />
            </div>
            <br />
            <div>
                <label htmlFor="">Senha: </label>
                <input value={senha} onChange={(e) => {setSenha(e.target.value)}} type="password" />
            </div>
            <br />
            <div>
                <label htmlFor="">Ativo: </label>

                <input onChange={(e) => {setAtivo(e.target.value)}} name='ativo' id='sim' value={ativo} type="radio" />
                <label htmlFor="sim">Sim</label>

                <input onChange={(e) => {setAtivo(e.target.value)}} name='ativo' id='nao' value={ativo} type="radio" />
                <label htmlFor="nao">Não</label>
            </div>
            <br />
            <div>
                <label htmlFor="tipo">Tipo de usuário</label>
                <select value={tipo} onChange={(e) => {setTipo(e.target.value)}} name="tipo" id="tipo">
                    <option value="">--Selecione--</option>
                    <option value="aluno">Aluno</option>
                    <option value="professor">Professor</option>
                </select>
                <button onClick={enviarDados} >Enviar</button>
            </div>
        </div>

    </div>
  )
}

export default CadastroUser