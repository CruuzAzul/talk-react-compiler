import { useEffect, useState } from "react";
import { getCompils } from "../api/getCompils";
import "../styles/Compils.css";
import { Compil } from "../types/Compil";
import { CompilCard } from "./CompilCard";
import Loader from "./other/Loader";
import { useThemeContext } from "../utils/useTheme";

interface CompilsProps {
  compilQueries?: string[];
  title: string;
}

export const Compils = ({ compilQueries, title }: CompilsProps) => {
  const { theme } = useThemeContext();
  const [compils, setCompils] = useState<Compil[] | null>(null);

  const fetchCompils = async () => {
    const compils = await getCompils(compilQueries);
    setCompils(compils.documents);
  };

  useEffect(() => {
    fetchCompils();
  }, []);

  if (compils === null) {
    return <Loader />;
  }

  return (
    <section className="compils-page" style={{ backgroundColor: theme }}>
      <h1 className="main-title">🎧 {title} 🎧</h1>
      <ul className="compil-list">
        {compils.map((compil) => (
          <li key={compil.$id}>
            <CompilCard compil={compil} />
          </li>
        ))}
      </ul>
    </section>
  );
};
