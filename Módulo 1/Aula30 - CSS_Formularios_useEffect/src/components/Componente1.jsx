import styles from './Componente1.module.css'

const Componente1 = () => {

    let estilo1 = {
        backgroundColor: 'green',
        color:'white',
        padding: '15px'
    }
  return (
    <div>
        <h1 className={styles.paragrafo}>Esse é o título 2</h1>

        <p style={{backgroundColor:'orange', color:'black'}}>Esse é o CSS de componente</p>

        <h2 style={estilo1}>CSS apenas desse componente</h2>

        <h1 className={styles.titulo}>Novo Título</h1>

    </div>
  )
}

export default Componente1