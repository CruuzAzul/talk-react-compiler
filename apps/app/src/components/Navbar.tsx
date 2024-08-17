import { Link } from "@tanstack/react-router";
import "../styles/Navbar.css";
import { useThemeContext } from "../utils/useTheme";

export const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/compils">Compils</Link>
        <Link to="/my-compils">My Compils</Link>
      </nav>
      <button onClick={toggleTheme}>{theme}</button>
    </header>
  );
};
