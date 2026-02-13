import React from 'react'
import { FormacaoCards } from '../formacaoCards/FormacaoCards'

export function Formacao() {
  return (
    <>
    <FormacaoCards>
        <h2>SESI</h2>
        <b>Conclusão: 12/2024</b>
        <p>Ensino médio completo.</p>
    </FormacaoCards>

    <FormacaoCards>
        <h2>SENAI</h2>
        <b>Conclusão: 12/2025</b>
        <p>Curso Técnico - ADS(Análise e Desenvolvimento de Sistemas) - Completo.</p>
    </FormacaoCards>

    <FormacaoCards>
        <h2>UNIP</h2>
        <b>Conclusão: 12/2026</b>
        <p>Curso Técnico - ADS(Análise e Desenvolvimento de Sistemas) - Cursando.</p>
    </FormacaoCards>

    <FormacaoCards>
        <h2>HASHTAG TREINAMENTOS</h2>
        <p>Plataforma de cursos online.</p>
    </FormacaoCards>
    </>
  )
}
