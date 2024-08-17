import { useEffect, useState } from "react";
import { getCompils } from "../api/getCompils";
import "../styles/Compils.css";
import { Compil } from "../types/Compil";
import { CompilCard } from "./CompilCard";

export const Compils = () => {
  const [compils, setCompils] = useState<Compil[] | null>(null);

  const fetchCompils = async () => {
    const compils = await getCompils();
    setCompils(compils.documents);
  };

  useEffect(() => {
    fetchCompils();
  }, []);

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
