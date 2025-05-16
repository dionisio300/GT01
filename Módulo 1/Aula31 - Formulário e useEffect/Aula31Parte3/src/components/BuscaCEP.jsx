import { useEffect } from 'react'
import {useState} from 'react'
import ResultadoBusca from './ResultadoBusca'
const BuscaCEP = () => {

    let [cep,setCep] = useState('')
    let [clicou,setClicou] = useState(0)
    let [endereco, setEndereco] = useState('')
    useEffect(() => {
        
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then((resposta) => {
            console.log(resposta)
            setEndereco(resposta)
        }).catch((erro) => {
            console.log(erro)
        })

    },[clicou])

    

  return (
    <div>
        <label htmlFor="cep">Digite seu CEP: </label>

        <input onChange={(e) => setCep(e.target.value)} type="text" name="cep" id="cep" maxLength={8}/> <br />

        {endereco ? <ResultadoBusca resultado = {endereco}/>: <h1> B </h1> }

        <button onClick={(e) => setClicou(clicou + 1)}>Enviar</button>
    </div>
  )
}

export default BuscaCEP