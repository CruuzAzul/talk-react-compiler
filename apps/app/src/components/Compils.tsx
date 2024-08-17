import { useEffect, useState, useCallback } from "react";
import { getCompils } from "../api/getCompils";
import "../styles/Compils.css";
import { Compil } from "../types/Compil";
import { CompilCard } from "./CompilCard";

interface CompilsProps {
  compilQueries?: string[];
}

export const Compils = ({ compilQueries }: CompilsProps) => {
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
    return <section>Loading...</section>;
  }

  return (
    <section>
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
