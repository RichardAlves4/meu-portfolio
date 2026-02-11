import React from 'react';
import styles from "./footer.module.css";

import linkedin from "../../assets/footer-icons/linkedin.png"
import github from "../../assets/footer-icons/github.png"
import email from "../../assets/footer-icons/e-mail.png"
import whatsapp from "../../assets/footer-icons/whatsapp.png"
import instagram from "../../assets/footer-icons/instagram.png"

const Footer = () => {
  return (
    <footer id='contacts'>
        <h1 className="purple">REDE/CONTATO</h1>

        <section className={styles.anchorsContainer}>
        <div className={styles.anchorsMedia}>
          <a href="https://www.linkedin.com/in/richardalves4/" className={styles.icon}>
              <img src={linkedin} alt=""></img>
            <p>Linkedin</p>
          </a>

          <a href="https://github.com/RichardAlves4" className={styles.icon}>
            <img src={github} alt="" ></img>
            <p>GitHub</p>
          </a>

          <a href="mailto:richardalvessilva41@gmail.com" className={styles.icon}>
            <img src={email} alt=""></img>
            <p>E-mail</p>
          </a>

          <a href="https://wa.me/5511978393539" className={styles.icon}>
            <img src={whatsapp} alt=""></img>
            <p>Whatsapp</p>
          </a>

          <a href="https://www.instagram.com/r1chard.alves/" className={styles.icon}>
            <img src={instagram} alt=""></img>
            <p>Instagram</p>
          </a>
        </div>
        
        <ul className={styles.navBar}>
          <li><a href="#about" className={styles.anchor}>Sobre</a></li>
          <li><a href="#formation" className={styles.anchor}>Formação</a></li>
          <li><a href="#certificates" className={styles.anchor}>Certificados</a></li>
          <li><a href="#projects" className={styles.anchor}>Projetos</a></li>
          <li><a href="#technologies" className={styles.anchor}>Tecnologias</a></li>
          <li><a href="#contacts" className={styles.anchor}>Contatos</a></li>
        </ul>
      </section>
      <h4>&copy; Copyright 2025 - Richard Alves - Todos os direitos reservados.</h4>
    </footer>
  )
}

export {Footer};