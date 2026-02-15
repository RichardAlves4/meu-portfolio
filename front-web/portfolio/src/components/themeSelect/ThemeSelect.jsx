import { useTheme } from "../../context/ThemeContext";
import { MdOutlineWbSunny } from "react-icons/md";
import { WiMoonWaxingCrescent3 } from "react-icons/wi";

import "./themeSelect.css";

const themes = [
  { id: "punk", icon: <MdOutlineWbSunny /> },
  { id: "dark", icon: <WiMoonWaxingCrescent3 /> },
];

const ThemeSelect = () => {
  const { theme: currentThemeId, setTheme } = useTheme();

  
  const toggleTheme = () => {
    const nextTheme = currentThemeId === "punk" ? "dark" : "punk";
    setTheme(nextTheme);
  };

  const activeTheme = themes.find((theme) => theme.id === currentThemeId) || themes[0];

  return (
    <div className="theme-container">
      <div className="selected-box iconTheme" onClick={toggleTheme}>
        {activeTheme.icon}
      </div>
    </div>
  );
};

export { ThemeSelect };
