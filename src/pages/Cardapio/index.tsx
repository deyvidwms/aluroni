import styles from './Cardapio.module.scss';

// transforma o svg em um componente
import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from './Buscador';
import { useState } from 'react';

export default function Cardapio () {
  const [busca, setBusca] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A cada do código e da massa
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardapio</h3>
        <Buscador 
          busca={busca} 
          setBusca={setBusca} 
        />
      </section>
    </main>
  )
}