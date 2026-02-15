import React from 'react';
import styles from "./footer.module.css";

import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer id='contacts' className='containerTheme'>
        <h1 className="secondaryTitleTheme">REDE/CONTATO</h1>

        <section className={styles.anchorsContainer}>
        <div className={styles.anchorsMedia}>
          <a href="https://www.linkedin.com/in/richardalves4/" className={styles.icon}>
            <FaLinkedin className='iconTheme'/>
            <p className='textTheme'>Linkedin</p>
          </a>

          <a href="https://github.com/RichardAlves4" className={styles.icon}>
            <FaGithub className='iconTheme'/>
            <p className='textTheme'>GitHub</p>
          </a>

          <a href="mailto:richardalvessilva41@gmail.com" className={styles.icon}>        
            <TfiEmail className='iconTheme'/>
            <p className='textTheme'>E-mail</p>
          </a>

          <a href="https://wa.me/5511978393539" className={styles.icon}>    
            <FaWhatsapp className='iconTheme'/>
            <p className='textTheme'>Whatsapp</p>
          </a>

          <a href="https://www.instagram.com/r1chard.alves/" className={styles.icon}>          
            <FaInstagram className='iconTheme'/>
            <p className='textTheme'>Instagram</p>
          </a>
        </div>
        
        <ul className={styles.navBar}>
          <li><a href="#about" className={`${styles.anchor} anchorTheme`}>Sobre</a></li>
          <li><a href="#formation" className={`${styles.anchor} anchorTheme`}>Formação</a></li>
          <li><a href="#certificates" className={`${styles.anchor} anchorTheme`}>Certificados</a></li>
          <li><a href="#projects" className={`${styles.anchor} anchorTheme`}>Projetos</a></li>
          <li><a href="#technologies" className={`${styles.anchor} anchorTheme`}>Tecnologias</a></li>
          <li><a href="#contacts" className={`${styles.anchor} anchorTheme`}>Contatos</a></li>
        </ul>
      </section>
      <h4 className='textTheme'>&copy; Copyright 2025 - Richard Alves - Todos os direitos reservados.</h4>
    </footer>
  )
}

export {Footer};