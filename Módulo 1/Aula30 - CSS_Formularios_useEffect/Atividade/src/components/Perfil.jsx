import React from 'react';
import styles from './Perfil.module.css';


function Perfil() {
  return (
    <div className={styles.card}>
      <img src={'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm90byUyMGRvJTIwcGVyZmlsfGVufDB8fDB8fHww'} alt="Foto de perfil" className={styles.imagem} />
      <h2 className={styles.nome}>Ana Oliveira</h2>
      <h3 className={styles.profissao}>Desenvolvedora Front-End</h3>
      <p className={styles.bio}>
        Sou apaixonada por criar interfaces modernas e responsivas. Trabalho com React, CSS e boas práticas de UI/UX.
      </p>
    </div>
  );
}

export default Perfil;