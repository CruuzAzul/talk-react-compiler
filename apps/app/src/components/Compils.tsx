import { useEffect, useState } from "react";
import { getCompils } from "../api/getCompils";
import "../styles/Compils.css";
import { Compil } from "../types/Compil";
import { CompilCard } from "./CompilCard";
import Loader from "./Loader";
import { useThemeContext } from "../utils/useTheme";

interface CompilsProps {
  compilQueries?: string[];
  title: string;
}

export const Compils = ({ compilQueries, title }: CompilsProps) => {
  const { theme } = useThemeContext();
  const [compils, setCompils] = useState<Compil[] | null>(null);
  const [search, setSearch] = useState("");

  const filteredCompils =
    compils?.filter(
      (compil) =>
        compil.name.toLowerCase().includes(search.toLowerCase()) ||
        compil.album.some(
          (album) =>
            album.name.toLowerCase().includes(search.toLowerCase()) ||
            album.artist.toLowerCase().includes(search.toLowerCase())
        )
    ) ?? [];

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
      <h1 className="main-title">{title}</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher par titre ou artiste"
        className="search-input"
      />
      <ul className="compil-list">
        {filteredCompils.map((compil) => (
          <li key={compil.$id}>
            <CompilCard compil={compil} />
          </li>
        ))}
      </ul>
    </section>
  );
};
