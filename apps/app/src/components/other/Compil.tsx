import { useEffect, useState } from "react";
import { getCompil } from "../../api/getCompil";
import { Route as CompilRoute } from "../../routes/compil/$compilId";
import { Compil as CompilType } from "../../types/Compil";
import { AlbumDetailsList } from "./AblumDetailsList";
import "../../styles/Compil.css";
import Loader from "./Loader";

export const Compil = () => {
  const { compilId } = CompilRoute.useParams();
  const [compil, setCompil] = useState<CompilType | null>(null);

  useEffect(() => {
    getCompil(compilId).then(setCompil);
  }, [compilId]);

  if (!compil) {
    return <Loader />;
  }

  return (
    <div className="compil-page">
      <h1 className="main-title">{compil.name}</h1>
      <AlbumDetailsList albums={compil.album} />
    </div>
  );
};
