import React from "react";
import formacaoBD from "./formacaoBD";
import { useTranslation } from "react-i18next";

import styles from "./formacao.module.css";

export function Formacao() {
  const { t } = useTranslation('pages');

  return (
    <div className={`${styles.cardsFormationContainer} textTheme`}>
      {formacaoBD.map((formation) => (
        <div key={formation.id} className={`${styles.cardContent} textTheme`}>
          <h2>{formation.nome}</h2>
          <b>{t('formation.label_conclusion')}: {formation.conclusao}</b>
          <p>{t(formation.descricao)}</p>
        </div>
      ))}
    </div>
  );
}
