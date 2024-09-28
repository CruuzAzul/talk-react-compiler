import { useEffect, useState, useCallback } from "react";
import { getCompils } from "../api/getCompils";
import "../styles/Compils.css";
import { Compil } from "../types/Compil";
import { CompilCard } from "./CompilCard";
import Loader from "./Loader";

interface CompilsProps {
  compilQueries?: string[];
  title: string;
}

export const Compils = ({ compilQueries, title }: CompilsProps) => {
  const [compils, setCompils] = useState<Compil[] | null>(null);

  // Possiblement intéressant à montrer, si on enlève ce useCallback on boucle à l'infini (donc sympa le compiler ici)
  const fetchCompils = useCallback(async () => {
    const compils = await getCompils(compilQueries);
    setCompils(compils.documents);
  }, [compilQueries]);

  useEffect(() => {
    fetchCompils();
  }, [fetchCompils]);

  if (compils === null) {
    return <Loader />;
  }

  return (
    <section>
      <h1 className="main-title">{title}</h1>
      <ul className="compil-list">
        {compils.map((compil) => (
          <li key={compil.$id}>
            <CompilCard compil={compil} fetchCompils={fetchCompils} />
          </li>
        ))}
      </ul>
    </section>
  );
};
