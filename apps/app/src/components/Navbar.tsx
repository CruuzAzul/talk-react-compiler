import { Link } from "@tanstack/react-router";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/compils">Compils</Link>
    </nav>
  );
};
