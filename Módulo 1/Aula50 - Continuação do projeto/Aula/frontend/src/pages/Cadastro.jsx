import React from 'react'

const Cadastro = () => {
  return (
    <div>
        <div>
            <label htmlFor="">Nome: </label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">Email: </label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">Senha: </label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">Tipo: </label>
            <select name="" id="">
                <option value="">Selecione</option>
                <option value="">Professor</option>
                <option value="">Aluno</option>
            </select>
        </div>
        <div>
            <label htmlFor="">Senha: </label>
            <input type="text" />
        </div>
    </div>
  )
}

export default Cadastro