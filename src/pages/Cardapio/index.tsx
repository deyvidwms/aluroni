import styles from './Cardapio.module.scss';

// transforma o svg em um componente
import { ReactComponent as Logo } from "assets/logo.svg";

export default function Cardapio () {
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
    </main>
  )
}