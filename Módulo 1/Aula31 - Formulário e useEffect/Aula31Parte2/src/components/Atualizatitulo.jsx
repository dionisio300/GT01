import { useState, useEffect } from "react"

const Atualizatitulo = () => {

    let [cont, setCont] = useState(0)
    let [atualizar, setAtualizar] = useState(0)

    useEffect(() => {
        document.title = `Você Clicou ${cont} Vezes`
    }, [])


    return (
        <div>
            <p>Contador: {cont}</p>
            <button onClick={() => setCont(cont + 1)}>Aumentar</button>
            <button onClick={()=>setAtualizar(atualizar + 1)}>Atualizar</button>
        </div>
    )
}

export default Atualizatitulo