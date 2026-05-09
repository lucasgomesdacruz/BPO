"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoHero from '../../../../public/images/logoHero.png'
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.header_Container}>
        <Image
          src={logoHero}
          alt="Logo Arqueiro"
          width={180}
          priority
        />

        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        <ul className={`${styles.menu} ${isMenuOpen ? styles.active : ""}`}>
          <li>
            <Link href="#">Início</Link>
          </li>
          <li>
            <Link href="#">Serviços</Link>
          </li>
          <li>
            <Link href="#">Sobre</Link>
          </li>
          <li>
            <Link href="#">Contato</Link>
          </li>
        </ul>

        <button className={styles.button}>Fale Conosco</button>
      </nav>
    </header>
  );
};

export default Header;
