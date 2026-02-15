import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { MdOutlineWbSunny } from "react-icons/md";
import { WiMoonWaxingCrescent3 } from "react-icons/wi";

import './themeSelect.css';

const themes = [
  { id: 'punk', name: 'Padrão', icon: <MdOutlineWbSunny/> },
  { id: 'dark', name: 'Dark mode', icon: <WiMoonWaxingCrescent3/> },
];

const ThemeSelect = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const {setTheme} = useTheme();

  return (
    <div className="theme-container">

      {themes.map((theme) => (
        <div 
          className="selected-box" 
          onClick={() => {
            setSelectedTheme(theme);
            setTheme(theme.id);
        }}
        >
        {selectedTheme.icon} 
        </div>
      ))}
      </div>
  );
}

export {ThemeSelect};