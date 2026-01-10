import { useState } from 'react';
import "./projetos.css";

const arrayProjects = [
  {
    id: 1,
    titulo: "Students Cool",
    data: "01/07/2024 - 01/12/2024",
    descricao: "Cardápio online interativo...",
    detalhesCompletos: "Aqui vai o texto longo do projeto 1..."
  },
  {
    id: 2,
    titulo: "Life Link",
    data: "01/02/2024 - 01/06/2024",
    descricao: "Rede social interna...",
    detalhesCompletos: "Aqui vai o texto longo do projeto 2..."
  },
  // ... adicione os outros aqui
];

// O segredo está aqui: o parâmetro deve ser o mesmo nome que você usa na prop lá embaixo
const Modal = ({ projeto, onClose }) => {
  
  // REGRA DE OURO: Se não tem projeto selecionado, o componente retorna NADA (null)
  if (!projeto) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Usamos 'projeto' (o item único vindo do state) e não 'arrayProjects' */}
        <h2>{projeto.titulo}</h2>
        <p><strong>Período:</strong> {projeto.data}</p>
        <p>{projeto.detalhesCompletos}</p>
        <button className="btn-close" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

const Projetos = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  return (
    <div className="grid-container">
      {arrayProjects.map((proj) => (
        <div key={proj.id} className="card">
          <h3>{proj.titulo}</h3>
          <p>{proj.descricao}</p>
          <button onClick={() => setProjetoSelecionado(proj)}>
            Ver detalhes
          </button>
        </div>
      ))}

      {/* Passamos o estado 'projetoSelecionado' para a prop 'projeto' */}
      <Modal 
        projeto={projetoSelecionado} 
        onClose={() => setProjetoSelecionado(null)} 
      />
    </div>
  );
}

export { Projetos };