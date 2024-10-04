import { useState, createContext, useContext } from "react";

type ThemeType = string;

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "#FFFFFF",
  setTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(
    (localStorage.getItem("theme") as ThemeType) ?? "#FFFFFF"
  );

  const setThemeInStorage = (theme: ThemeType) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return { theme, setTheme: setThemeInStorage };
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
