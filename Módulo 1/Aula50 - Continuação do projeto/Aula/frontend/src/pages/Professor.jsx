import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Professor = () => {

    const professor = JSON.parse(localStorage.getItem('usuario'))
    console.log(professor)

    let [tela, setTela] = useState()
    let [turmaSelecionada, setTurmaSelecionada] = useState(false)
    let [turma, setTurma] = useState()
    let [alunos, setAlunos] = useState()
    console.log(tela)

    async function lancarNotas(){
      const id_prof = JSON.parse(localStorage.getItem('usuario')).id
      console.log(id_prof)
      const resp = await fetch(`http://localhost:3000/trazerAlunos/${id_prof}/${turma}`)

      const dados = await resp.json()

      console.log(dados)
      setAlunos(dados)
      setTela('notas')
    }




  return (
    <div>
        <h1 className='text-center'>Painel do Professor</h1>
        <div className='text-center mt-5'>

          <h3>Selecione Sua turma</h3>
          <input onChange={(e) => setTurma(e.target.value)} type="text" id='turma' name='turma'/>

          <button onClick={() => setTurmaSelecionada(true)} className='btn btn-dark'>Selecionar</button>

          <br />
          <br />

          {turmaSelecionada && (<div>
              <button onClick={lancarNotas} className='btn btn-primary me-4'>Lançar Notas</button>

              <button onClick={()=>setTela('freq')} className='btn btn-success'>Lançar Frequência</button>
            </div>
          )}

          
          
        </div>
        {!tela && 
        (<div className='text-center mt-4'>
          Selecione um opção acima
        </div>)
        }

        {tela == 'freq' && (
          <div style={{width:'70%',margin:'10px auto'}}>
            <h2>Lançamento de frequencia</h2>

            <div className='d-flex p-4'>
              <div style={{width:'300px'}}>
              <span>João Silva</span>
            </div>

            <div>
              <select name="" id="">
                <option value="">Presente</option>
                <option value="">Falta</option>
              </select>
            </div>
            </div>
            <hr />
            
            <br />
            <button className='btn btn-success w-100'>Salvar Frequência</button>
            
            
          </div>
        )}

        {tela == 'notas' && (
          <div style={{width:'70%',margin:'10px auto'}}>
            <h2>Lançamento de notas</h2>

            {alunos.map((usuario) =>(
                <div className='d-flex p-4'>
                <div style={{width:'300px'}}>
                  <span>{usuario.nome}</span>
                </div>
                <div>
                  <span>Nota: </span>
                  <input type="number" min={0} max={10} step={0.1}/>
                </div>
              </div>

            ))}


            
            <button className='btn btn-primary w-100'>Salvar Frequência</button>
          </div>
        )}
        


    </div>
  )
}

export default Professor