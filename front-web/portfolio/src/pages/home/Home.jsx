import React from "react";

import {Formacao} from "../../components/formacao/Formacao"
import { Certificados } from "../../components/certificados/Certificados"
import { Projetos } from "../../components/projetos/Projetos"
import { TecnologiasLayout } from "../../components/tecnologiasLayout/TecnologiasLayout";

import styles from "./home.module.css";
import myPhoto from "../../assets/richard.jpg";

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={`${styles.aboutContainer} secondaryContainerTheme`} id='about'>
        <h1 className="titleTheme">SOBRE</h1>

        <div className={styles.imgTextContainer}>
          <div className={styles.imgAboutContainer}>
            <img src={myPhoto} alt="" className={`${styles.imgAbout} borderTheme`}/>
            <h2 className="secondaryTextTheme">Richard Alves da Silva</h2>
          </div>

          <div className={styles.textAboutContainer}>
            <h2 className="secondaryTextTheme">dev full-stack</h2>

            <p className={`${styles.paragraphAboutContainer} secondaryTextTheme`}>Durante o ensino médio tive a grande oportunidade de 
              fazer um <span className={`${styles.keyWordAboutContent} titleTheme`}>curso técnico</span> em <span className={`${styles.keyWordAboutContent} titleTheme`}>ADS no Senai</span>. Nesse curso eu estudei programação 
              por dois anos e tive certeza que gostaria de seguir na área da tecnologia. 
              Nesse curso tive contato com linguagens como <span className={`${styles.keyWordAboutContent} titleTheme`}>HTML e CSS</span>. Também usei 
              linguagens de programação, ferramentas e frameworks como <span className={`${styles.keyWordAboutContent} titleTheme`}>JS</span>, <span className={`${styles.keyWordAboutContent} titleTheme`}>Git/Git Hub</span>, 
              <span className={`${styles.keyWordAboutContent} titleTheme`}>React + Vite</span> entre outros... Durante meu período no Senai também fiz um 
              curso de <span className={`${styles.keyWordAboutContent} titleTheme`}>JAVA</span> e outro de Power BI. Após a graduação em meu curso técnico 
              eu dei inicio ao ensino superior na <span className={`${styles.keyWordAboutContent} titleTheme`}>Unip Paulista</span> onde atualmente estou 
              cursando ADS para aperfeiçoar meu conhecimento e aprender ainda mais. 
              Atualmente estou para dar inicio ao meu terceiro semestre e estou 
              buscando um estágio para conseguir experiência e aprender como lidar com 
              situações reais do coditiano de um programador nas empresas. Atualmente 
              meus <span className={`${styles.keyWordAboutContent} titleTheme`}>objetivos</span> são: Aprender, estudar e conseguir um estágio.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.formationContainer} containerTheme`} id='formation'>
        <h1 className="secondaryTitleTheme">FORMAÇÃO</h1>

        <div className={`${styles.cardsFormationContainer} textTheme`}>
          <Formacao/>
        </div>
      </section>

      <section className='secondaryContainerTheme' id='certificates'>
        <h1 className="titleTheme">CERTIFICADOS</h1>
        <Certificados/>
      </section>

      <section className={`${styles.projectsContainer} containerTheme`} id='projects'>
        <h1 className="secondaryTitleTheme">PROJETOS</h1>
        <Projetos/>
      </section>

      <section className={`${styles.technologiesContainer} secondaryContainerTheme`} id='technologies'>
        <h1 className="titleTheme">TECNOLOGIAS</h1>

        <div className={styles.iconsTechnologiesContainer}>
          <TecnologiasLayout/>
        </div>
      </section>
    </div>
  ) 
}

export { Home };