import React from 'react'
import { useState } from 'react'

const Professor = () => {

    const professor = JSON.parse(localStorage.getItem('usuario'))
    console.log(professor)

    let [tela, setTela] = useState()


  return (
    <div>
        <h1 className='text-center'>Painel do Professor</h1>
        <div className='text-center mt-5'>
          <button className='btn btn-primary me-4'>Lançar Notas</button>
          <button onClick={()=>setTela('freq')} className='btn btn-success'>Lançar Frequência</button>
        </div>
        {!tela && 
        (<div className='text-center mt-4'>
          Selecione um opção acima
        </div>)
        }

        {tela == 'freq' && (
          <div>
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


        


    </div>
  )
}

export default Professor