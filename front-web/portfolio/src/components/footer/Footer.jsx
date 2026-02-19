import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from "./footer.module.css";

import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  const { t } = useTranslation('pages');

  return (
    <footer id='contacts' className='containerTheme'>
        <h1 className="secondaryTitleTheme">{t('footer.title')}</h1>

        <section className={styles.anchorsContainer}>
        <div className={styles.anchorsMedia}>
          <a href="https://www.linkedin.com/in/richardalves4/" target='_blank' rel='noreferrer' className={styles.icon}>
            <FaLinkedin className='iconTheme'/>
            <p className='textTheme'>Linkedin</p>
          </a>

          <a href="https://github.com/RichardAlves4" target='_blank' rel='noreferrer' className={styles.icon}>
            <FaGithub className='iconTheme'/>
            <p className='textTheme'>GitHub</p>
          </a>

          <a href="mailto:richardalvessilva41@gmail.com" target='_blank' rel='noreferrer' className={styles.icon}>        
            <TfiEmail className='iconTheme'/>
            <p className='textTheme'>E-mail</p>
          </a>

          <a href="https://wa.me/5511978393539" target='_blank' rel='noreferrer' className={styles.icon}>    
            <FaWhatsapp className='iconTheme'/>
            <p className='textTheme'>Whatsapp</p>
          </a>

          <a href="https://www.instagram.com/r1chard.alves/" target='_blank' rel='noreferrer' className={styles.icon}>          
            <FaInstagram className='iconTheme'/>
            <p className='textTheme'>Instagram</p>
          </a>
        </div>
        
        <ul className={styles.navBar}>
          <li><a href="#about" className={`${styles.anchor} anchorTheme`}>{t('common:navbar.anchor1')}</a></li>
          <li><a href="#formation" className={`${styles.anchor} anchorTheme`}>{t('common:navbar.anchor2')}</a></li>
          <li><a href="#certificates" className={`${styles.anchor} anchorTheme`}>{t('common:navbar.anchor3')}</a></li>
          <li><a href="#projects" className={`${styles.anchor} anchorTheme`}>{t('common:navbar.anchor4')}</a></li>
          <li><a href="#technologies" className={`${styles.anchor} anchorTheme`}>{t('common:navbar.anchor5')}</a></li>
          <li><a href="#contacts" className={`${styles.anchor} anchorTheme`}>{t('common:navbar.anchor6')}</a></li>
        </ul>
      </section>
      <h4 className='textTheme'>&copy;{t('footer.reserved')}</h4>
    </footer>
  )
}

export {Footer};