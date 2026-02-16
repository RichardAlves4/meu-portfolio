import React from 'react'
import { IconContext } from 'react-icons/lib'
import tecnologiasIconsDB from './tecnologiasIconsDB';

import styles from "./tecnologias.module.css"

export function Tecnologias() {
  return (
    <div className={`${styles.iconsTechnologiesContainer} secondaryIconTheme`}>
    <IconContext.Provider  value={{size: "5rem" }}>
    {tecnologiasIconsDB.map((tech) => (
      <div key={tech.id} className={styles.iconsTechnologiesContent}>
        {tech.icon}
        <p>{tech.nome}</p>
      </div>
    ))}
    </IconContext.Provider>
    </div>
  )
}