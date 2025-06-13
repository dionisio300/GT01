import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Professor = () => {

  const professor = JSON.parse(localStorage.getItem('usuario'))

  let [tela, setTela] = useState()
  let [turmaSelecionada, setTurmaSelecionada] = useState(false)
  let [turma, setTurma] = useState()
  let [alunos, setAlunos] = useState()
  let [disciplinasProfessor, setDisciplinasProfessor] = useState([])
  let [alunosFreq, setAlunosFreq] = useState([])

  async function lancarNotas(e) {
    const id_prof = JSON.parse(localStorage.getItem('usuario')).id
    console.log(id_prof)
    const resp = await fetch(`http://localhost:3000/trazerAlunos/${id_prof}/${turma}`)
    const dados = await resp.json()

    console.log(dados)

    setAlunos(dados)

    if(e == 'freq'){
      setTela('freq')
    }else{
      setTela('notas')
    }

    
  }

  useEffect(() => {
    const carregarDados = async () => {
      const resposta = await fetch(`http://localhost:3000/dadosProfessor/${professor.id}`);
      const dados = await resposta.json();
      console.log(dados);
      setDisciplinasProfessor(dados);
    };

    carregarDados();
  }, []);


  let a = []
  function construirFrequencia(freq,nome,id){
    a.push({nome:nome,id:id,freq:freq})
    console.log(a)
  }

  async function postarFrequencia(){
    
    const resposta = await fetch('http://localhost:3000/postarFrequencia',
       {method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(a) })
        
      const dados = await resposta.json();
  }

  return (
    <div>
      <h1 className='text-center'>Bem-Vindo Professor {professor.nome.split(' ')[1]} {professor.nome.split(' ')[2]}</h1>
      <div className='text-center mt-5'>

        <h3>Selecione Sua turma</h3>
        <select onChange={(e)=>setTurma(e.target.value)} name="turma" id="" className='me-3'>
          <option value="turma">-- Turma-- </option>
          {disciplinasProfessor.map((disciplina) => (
            <option key={disciplina.disciplina_id} value={disciplina.disciplina_id}>
              {disciplina.disciplina_id} - {disciplina.nome}
            </option>
          ))}


        </select>

        <button onClick={() => setTurmaSelecionada(true)} className='btn btn-dark'>Selecionar</button>

        <br />
        <br />

        {turmaSelecionada && (<div>
          <button onClick={() => lancarNotas('notas')} className='btn btn-primary me-4'>Lançar Notas</button>

          <button onClick={() => lancarNotas('freq')} value={'freq'} className='btn btn-success'>Lançar Frequência</button>
        </div>
        )}



      </div>
      {!tela &&
        (<div className='text-center mt-4'>
          Selecione um opção acima
        </div>)
      }

      {tela == 'freq' && (
        <div style={{ width: '70%', margin: '10px auto' }}>

          <h2>Lançamento de Frequência</h2>


          {alunos.map((usuario) => (
            <div className='d-flex p-4 border'>
              <div style={{ width: '300px' }}>
                <span>{usuario.nome}</span>
              </div>
              <div>
                <select key={usuario.id} onChange={(e)=>construirFrequencia(e.target.value,usuario.nome,usuario.id)} name="" id="">
                  <option value="">Selecione</option>
                  <option value="presente">Presente</option>
                  <option value="falta">Falta</option>
              </select>
              </div>
            </div>

          ))}
          <button onClick={() => postarFrequencia()} className='btn btn-success w-100'>Salvar Frequência</button>
        </div>
      )}

      {tela == 'notas' && (
        <div style={{ width: '70%', margin: '10px auto' }}>
          <h2>Lançamento de notas</h2>

          {alunos.map((usuario) => (
            <div key={usuario.id} className='d-flex p-4 border'>
              <div style={{ width: '300px' }}>
                <span>{usuario.nome}</span>
              </div>
              <div>
                <span>Nota: </span>
                <input type="number" min={0} max={10} step={0.1} />
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