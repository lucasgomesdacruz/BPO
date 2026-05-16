"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.header_Container}>
        <div className={styles.brand}>
          <Image
            src="/images/logoHero.png"
            alt="Logo Arqueiro"
            width={180}
            height={60}
            priority
          />
        </div>

        <ul className={`${styles.menu} ${isMenuOpen ? styles.active : ""}`}>
          <li>
            <Link href="/" onClick={closeMenu}>Início</Link>
          </li>
          <li>
            <Link href="/servicos" onClick={closeMenu}>Serviços</Link>
          </li>
          <li>
            <Link href="/sobre" onClick={closeMenu}>Sobre</Link>
          </li>
          <li>
            <Link href="/contato" onClick={closeMenu}>Contato</Link>
          </li>
        </ul>

        <button className={styles.button}>Fale Conosco</button>

        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </nav>

      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </header>
  );
};

export default Header;
