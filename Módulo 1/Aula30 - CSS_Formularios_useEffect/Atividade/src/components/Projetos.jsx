import React from 'react';
import styles from './Projetos.module.css';

function Projetos() {
  return (
    <div className={styles.container}>
      <h2>Projetos Recentes</h2>
      <div className={styles.projeto}>
        <h3>Portfólio Pessoal</h3>
        <p>Site feito com React e deploy no Vercel.</p>
      </div>
      <div className={styles.projeto}>
        <h3>Landing Page de Produto</h3>
        <p>HTML, CSS e responsividade mobile.</p>
      </div>
      <div className={styles.projeto}>
        <h3>App de Tarefas</h3>
        <p>React com localStorage e gerenciamento de estado.</p>
      </div>
    </div>
  );
}

export default Projetos;
