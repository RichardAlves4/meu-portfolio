import React from "react";
import { Certificados } from "../../components/certificados/Certificados"
import { Projetos } from "../../components/projetos/Projetos"

import styles from "./home.module.css";
import myPhoto from "../../assets/richard.jpg";
import { FaAws, FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython, FaReact,  } from "react-icons/fa";
import { SiDbeaver, SiMysql, SiPostgresql, SiPostman, SiSpring } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Tecnologias } from '../../components/tecnologias/Tecnologias';

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={`${styles.aboutContainer}`} id='about'>
        <h1 className="green">SOBRE</h1>

        <div className={styles.imgTextContainer}>
          <div className={styles.imgAboutContainer}>
            <img src={myPhoto} alt="" className={styles.imgAbout}/>
            <h2>Richard Alves da Silva</h2>
          </div>

          <div className={styles.textAboutContainer}>
            <h2>dev full-stack</h2>

            <p className={styles.paragraphAboutContainer}>Durante o ensino médio tive a grande oportunidade de 
              fazer um <span className={styles.keyWordAboutContent}>curso técnico</span> em <span className={styles.keyWordAboutContent}>ADS no Senai</span>. Nesse curso eu estudei programação 
              por dois anos e tive certeza que gostaria de seguir na área da tecnologia. 
              Nesse curso tive contato com linguagens como <span className={styles.keyWordAboutContent}>HTML e CSS</span>. Também usei 
              linguagens de programação, ferramentas e frameworks como <span className={styles.keyWordAboutContent}>JS</span>, <span className={styles.keyWordAboutContent}>Git/Git Hub</span>, 
              <span className={styles.keyWordAboutContent}>React + Vite</span> entre outros... Durante meu período no Senai também fiz um 
              curso de <span className={styles.keyWordAboutContent}>JAVA</span> e outro de Power BI. Após a graduação em meu curso técnico 
              eu dei inicio ao ensino superior na <span className={styles.keyWordAboutContent}>Unip Paulista</span> onde atualmente estou 
              cursando ADS para aperfeiçoar meu conhecimento e aprender ainda mais. 
              Atualmente estou para dar inicio ao meu terceiro semestre e estou 
              buscando um estágio para conseguir experiência e aprender como lidar com 
              situações reais do coditiano de um programador nas empresas. Atualmente 
              meu <span className={styles.keyWordAboutContent}>objetivos</span> são: Aprender, estudar e conseguir um estágio.</p>
          </div>
        </div>
      </section>

      <section className={styles.formationContainer} id='formation'>
        <h1 className="purple">FORMAÇÃO</h1>

        <ul className={styles.cardsFormationContainer}>
          <li className={styles.cardFormationContent}>
            <h2>SESI</h2>
            <b>Conclusão: 12/2024</b>
            <p>Ensino médio completo.</p>
          </li>

          <li className={styles.cardFormationContent}>
            <h2>SENAI</h2>
            <b>Conclusão: 12/2025</b>
            <p>Curso Técnico - ADS(Análise e Desenvolvimento de Sistemas) - Completo.</p>
          </li>

          <li className={styles.cardFormationContent}>
            <h2>UNIP</h2>
            <b>Conclusão: 12/2026</b>
            <p>Curso Técnico - ADS(Análise e Desenvolvimento de Sistemas) - Incompleto.</p>
          </li>

          <li className={styles.cardFormationContent}>
            <h2>HASHTAG TREINAMENTOS</h2>
            <p>Plataforma de cursos online.</p>
          </li>
        </ul>
      </section>

      <section className={styles.certificatesContent} id='certificates'>
        <h1 className="green">CERTIFICADOS</h1>
        <Certificados/>
      </section>

      <section className={styles.projectsContainer} id='projects'>
        <h1 className="purple">PROJETOS</h1>
        <Projetos/>
      </section>

      <section className={styles.technologiesContainer} id='technologies'>
        <h1 className="green">TECNOLOGIAS</h1>

        <div className={styles.iconsTechnologiesContainer}>
          <Tecnologias>
            <FaHtml5 />
            <p>HTML5</p>
          </Tecnologias>

          <Tecnologias>
            <FaCss3Alt/>
            <p>CSS</p>
          </Tecnologias>

          <Tecnologias>
            <FaJs/>
            <p>Java Script</p>
          </Tecnologias>

          <Tecnologias>
            <FaPython/>
            <p>Python</p>
          </Tecnologias>

          <Tecnologias className={styles.iconsTechnologiesContent}>
            <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
              <path fill="#fff" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path>
              <path fill="#fff" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path>
              <path fill="#8d25d5" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
            </svg>
            <p>Linguagem C</p>
          </Tecnologias>
          
          <Tecnologias>
            <FaJava/>
            <p>JAVA</p>
          </Tecnologias>

          <Tecnologias>
            <SiSpring />
            <p>Spring Boot</p>
          </Tecnologias>

          <Tecnologias>
            <FaAws/>
            <p>AWS</p>
          </Tecnologias>

          <Tecnologias>
            <FaNodeJs/>
            <p>NodeJs</p>
          </Tecnologias>
          
          <Tecnologias>
            <FaReact/>
            <p>React</p>
          </Tecnologias>

          <Tecnologias>
            <TbBrandReactNative/>
            <p>React Native</p>
          </Tecnologias>

          <Tecnologias>
            <FaGithub/>
            <p>Github</p>
          </Tecnologias>

          <Tecnologias>
            <FaGitAlt/>
            <p>Git</p>
          </Tecnologias>

          <Tecnologias>
            <FaFigma/>
            <p>Figma</p>
          </Tecnologias>

          <Tecnologias>
            <SiMysql/>
            <p>MySQL</p>
          </Tecnologias>

          <Tecnologias>
            <SiPostgresql/>
            <p>PostgreSQL</p>
          </Tecnologias>

          <Tecnologias>
            <SiPostman/>
            <p>Postman</p>
          </Tecnologias>

          <Tecnologias>
            <SiDbeaver/>
            <p>DBeaver</p>
          </Tecnologias>
        </div>
      </section>
    </div>
  ) 
}

export { Home };