import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './components/Componente1'

function App() {

  let produtos = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  }




  let pessoas = [
    {nome:'Maria', telefone:'859858585', cpf:'987987987',id:1},
    {nome:'João', telefone:'369369369', cpf:'741741741',id:2},
    {nome:'Pedro', telefone:'963963963', cpf:'852852852',id:3},
  ]
  
  return (
    <>
      <h1>Revisão sobre props</h1>
      <Componente1 people = {pessoas}></Componente1>
    </>
  )
}

export default App
