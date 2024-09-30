import { Link } from "@tanstack/react-router";
import "../styles/Navbar.css";
import { useThemeContext } from "../utils/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext();

  const themeIcon = theme === "light" ? faMoon : faSun;

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/compils">Compils</Link>
        <Link to="/my-compils">My Compils</Link>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme}>
        <FontAwesomeIcon icon={themeIcon} />
      </button>
    </header>
  );
};
