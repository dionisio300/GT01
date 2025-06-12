import React from 'react'

const Aluno = () => {

    const aluno = JSON.parse(localStorage.getItem('usuario'))
    console.log(aluno)

  return (
    <div>
        <h1>Olá {aluno.nome} seja bem-vindo ao sistema da escola</h1>
    </div>
  )
}

export default Aluno