


const Componente1 = (props) => {
  
  return (
    <div>
        <h1>Lista de Clientes cadastrados:</h1>
        {props.people.map((pessoaAtual) => (
            <h3 key={pessoaAtual.id}>
                Nome:{pessoaAtual.nome} Telefone:{pessoaAtual.telefone} CPF:{pessoaAtual.cpf}
            </h3>
        ))}
    </div>
  )
}

export default Componente1