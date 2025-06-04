import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [usuarios,setUsuarios] = useState([])

  useEffect(() => {
    console.log('teste')
    fetch('http://localhost:3000/usuarios')
    .then(res => res.json())
    .then((res) => {
      setUsuarios(res)
      console.log(usuarios)
    })
  },[])

  return (
    <>
      
    </>
  )
}

export default App
