import React from 'react'

const Componente2 = (props) => {
  return (
    <>
        <div className='container'>
            <div style={{width:'250px', border:' solid 1px red'}}>
                <img src={props.produtos[1].image} alt="" width={'200px'} />
                <h3>Título: {props.produtos[1].title}</h3>
                <h3>Preço: {props.produtos[1].price}</h3>
            </div>
        </div>
    </>
  )
}

export default Componente2