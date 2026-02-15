import { ThemeProvider } from "./context/ThemeContext";
import { Routes } from "./routes/Routes";

import "./App.css";

export function App() {
  return (
    <>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </>
  );
}