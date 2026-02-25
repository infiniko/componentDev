import { createContext, useContext, useState } from "react";

//create context
const ThemeContext = createContext(null);

// provide context -> wrapper
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isDark: theme === "dark" }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// use context
export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}

function ThemeToggleButton() {
  const { theme, toggleTheme, isDark } = useTheme();
  return <button onClick={toggleTheme}>{isDark ? "DARK" : "LIGHT"}</button>;
}

const ThemeToggler = () => {
  return <div>ThemeToggler</div>;
};

export default ThemeToggler;
