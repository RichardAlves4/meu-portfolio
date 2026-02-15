import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './themeSelect.css';

const themes = [
  { id: 'punk', name: 'Padrão', img: '../../src/assets/default-mode.png' },
  { id: 'dark', name: 'Dark mode', img: '../../src/assets/dark-mode.png' },
];

const ThemeSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const {setTheme} = useTheme();

  return (
    <div className="theme-container">
      <div className="selected-box secondaryborderTheme" onClick={() => setIsOpen(!isOpen)}>
        <img src={selectedTheme.img} key='default' />
      </div>

      {isOpen && (
        <div className="options-grid">
          {themes.map((theme) => (
            <div 
              key={theme.id}
              className="option-item"
              onClick={() => {
                setSelectedTheme(theme);
                setIsOpen(false);
                setTheme(theme.id);
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