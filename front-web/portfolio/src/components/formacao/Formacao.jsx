import React from "react";
import formacaoBD from "./formacaoBD";

import styles from "./formacao.module.css";

export function Formacao() {
  return (
    <div className={`${styles.cardsFormationContainer} textTheme`}>
      {formacaoBD.map((formation) => (
        <div key={formation.id} className={`${styles.cardContent} textTheme`}>
          <h2>{formation.nome}</h2>
          <b>Conclusão: {formation.conclusao}</b>
          <p>{formation.descricao}</p>
        </div>
      ))}
    </div>
  );
}
