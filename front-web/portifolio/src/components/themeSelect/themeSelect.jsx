import { useState } from 'react';
import './ThemeSelector.css';

const themes = [
  { id: 'default', name: 'Padrão', img: '../../../public/assets/default-mode.png' },
  { id: 'dark', name: 'Dark mode', img: '../../../public/assets/dark-mode.png' },
  { id: 'red', name: 'Red Mode', img: '../../../public/assets/red-mode.png' },
];

const ThemeSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  return (
    <div className="theme-container">
      {/* O "Botão" que mostra o tema atual */}
      <div className="selected-box" onClick={() => setIsOpen(!isOpen)}>
        <img src={selectedTheme.img} key='default' />
      </div>

      {/* A lista de opções que abre e fecha */}
      {isOpen && (
        <div className="options-grid">
          {themes.map((theme) => (
            <div 
              key={theme.id} 
              className="option-item"
              onClick={() => {
                setSelectedTheme(theme);
                setIsOpen(false);
                // Aqui você dispararia a lógica para mudar o tema do site
              }}
            >
              <img src={theme.img} alt={theme.name} />
              <span>{theme.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export {ThemeSelect};