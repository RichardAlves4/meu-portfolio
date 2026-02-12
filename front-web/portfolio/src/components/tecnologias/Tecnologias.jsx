import React from 'react'
import { IconContext } from 'react-icons/lib'

import styles from "./tecnologias.module.css"

export function Tecnologias({children}) {
  return (
    <div className={styles.iconsTechnologiesContent}>
    <IconContext.Provider value={{ color: "white", size: "5rem" }}>
    {children}
    </IconContext.Provider>
    </div>
  )
}