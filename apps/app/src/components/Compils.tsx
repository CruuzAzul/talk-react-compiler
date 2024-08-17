import { useEffect, useState } from "react";
import { getCompils } from "../api/getCompils";
import "../styles/Compils.css";
import { Compil } from "../types/Compil";
import { CompilCard } from "./CompilCard";

interface CompilsProps {
  compilQueries?: string[];
}

export const Compils = ({ compilQueries }: CompilsProps) => {
  const [compils, setCompils] = useState<Compil[] | null>(null);

  const fetchCompils = async () => {
    const compils = await getCompils(compilQueries);
    setCompils(compils.documents);
  };

  useEffect(() => {
    fetchCompils();
  }, [fetchCompils]);

  if (compils === null) {
    return <section>Loading...</section>;
  }

  console.log(compils);

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
