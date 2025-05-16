import React from 'react'

/*
bairro
: 
"Tabapuá"
cep
: 
"61635-025"
complemento
: 
""
ddd
: 
"85"
estado
: 
"Ceará"
gia
: 
""
ibge
: 
"2303709"
localidade
: 
"Caucaia"
logradouro
: 
"Rua Rio Negro"
regiao
: 
"Nordeste"
siafi
: 
"1373"
uf
: 
"CE"
unidade
: 
""

*/

const ResultadoBusca = (props) => {
  return (
    <>
    <div>
        <label htmlFor="">Logradouro</label>
        <input type="text" value={props.resultado.logradouro} disabled/>
    </div>

    <div>
        <label htmlFor="">Bairro</label>
        <input type="text" value={props.resultado.bairro} disabled/>
    </div>


    <div>
        <label htmlFor="">Regiao</label>
        <input type="text" value={props.resultado.regiao} disabled/>
    </div>
    
    </>
    
)}

export default ResultadoBusca