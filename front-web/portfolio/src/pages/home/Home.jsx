import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Formacao } from "../../components/formacao/Formacao";
import { Certificados } from "../../components/certificados/Certificados"
import { Projetos } from "../../components/projetos/Projetos"
import { Tecnologias } from "../../components/tecnologias/Tecnologias";

import styles from "./home.module.css";
import myPhoto from "../../assets/richard.jpg";

const Home = () => {
  const { t } = useTranslation('pages');

  return (
    <div className={styles.home}>
      <section className={`${styles.aboutContainer} secondaryContainerTheme`} id='about'>
        <h1 className="titleTheme">{t('about.title')}</h1>

        <div className={styles.imgTextContainer}>
          <div className={styles.imgAboutContainer}>
            <img src={myPhoto} alt="" className={`${styles.imgAbout} borderTheme`}/>
            <h2 className="secondaryTextTheme">Richard Alves da Silva</h2>
          </div>

          <div className={styles.textAboutContainer}>
            <h2 className="secondaryTextTheme">Dev Full-stack</h2>

            <p className={`${styles.paragraphAboutContainer} secondaryTextTheme`}>
              <Trans i18nKey="about.description" t={t}>
              <span className={`${styles.keyWordAboutContent} keyWordTheme`} />
              <span className={`${styles.keyWordAboutContent} keyWordTheme`} />
              <span className={`${styles.keyWordAboutContent} keyWordTheme`} />
              <span className={`${styles.keyWordAboutContent} keyWordTheme`} />
              <span className={`${styles.keyWordAboutContent} keyWordTheme`} />
              <span className={`${styles.keyWordAboutContent} keyWordTheme`} />
              <span className={`${styles.keyWordAboutContent} keyWordTheme`} />
              <span className={`${styles.keyWordAboutContent} keyWordTheme`} />
              <span className={`${styles.keyWordAboutContent} keyWordTheme`} />
              </Trans>
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.formationContainer} containerTheme`} id='formation'>
        <h1 className="secondaryTitleTheme">{t('formation.title')}</h1>

        <div >
          <Formacao/>
        </div>
      </section>

      <section className='secondaryContainerTheme' id='certificates'>
        <h1 className="titleTheme">{t('certificates.title')}</h1>
        <Certificados/>
      </section>

      <section className={`${styles.projectsContainer} containerTheme`} id='projects'>
        <h1 className="secondaryTitleTheme">PROJETOS</h1>
        <Projetos/>
      </section>

      <section className={`${styles.technologiesContainer} secondaryContainerTheme`} id='technologies'>
        <h1 className="titleTheme">TECNOLOGIAS</h1>

        <div className={styles.iconsTechnologiesContainer}>
          <Tecnologias/>
        </div>
      </section>
    </div>
  ) 
}

export { Home };