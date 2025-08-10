import styles from "./Header.module.scss"

import React from 'react'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_Container}>
        <h2>Diego consultoria</h2>

        <ul>
            <li>Início</li>
            <li>Serviços</li>
            <li>Sobre</li>
            <li>Contato</li>
        </ul>
        
        <button>
            Fale Conosco
        </button>
      </nav>
    </header>
  )
}

export default Header
