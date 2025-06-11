import React from 'react'

const Professor = () => {

    const professor = JSON.parse(localStorage.getItem('usuario'))
    console.log(professor)


  return (
    <div>
        <h1>Olá {professor.nome}, seja bem vindo ao sistema da escola</h1>
    </div>
  )
}

export default Professor