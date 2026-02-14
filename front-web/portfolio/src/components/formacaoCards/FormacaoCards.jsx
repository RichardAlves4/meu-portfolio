import React from 'react'
import styles from "./formationCards.module.css"

export function FormacaoCards({children}) {
  return (
    <div className={`${styles.cardContent} textTheme`}>
        {children}
    </div>
  )
}