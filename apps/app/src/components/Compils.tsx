import { useEffect, useState } from "react";
import { getCompils } from "../api/getCompils";
import "../styles/Compils.css";
import { CompilElement } from "./CompilElement";
import { Compil } from "../types/Compil";

export const Compils = () => {
  const [compils, setCompils] = useState<Compil[] | null>(null);

  useEffect(() => {
    const fetchCompils = async () => {
      const compils = await getCompils();
      setCompils(compils.documents);
    };

    fetchCompils();
  }, []);

  if (compils === null) {
    return <section>Loading...</section>;
  }

  return (
    <section>
      <ul className="compil-list">
        {compils.map((compil) => (
          <li key={compil.$id}>
            <p className="compil-name">{compil.name}</p>
            <CompilElement compil={compil} />
          </li>
        ))}
      </ul>
    </section>
  );
};
