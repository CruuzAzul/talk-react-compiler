import { Compil } from "../types/Compil";
import "../styles/CompilElement.css";
import { AlbumCard } from "./AlbumCard";

interface CompilProps {
  compil: Compil;
}

export const CompilElement = ({ compil }: CompilProps) => {
  return (
    <ul className="album-list">
      {compil.album.map((album) => (
        <li key={album.thumbnail}>
          <AlbumCard album={album} />
        </li>
      ))}
    </ul>
  );
};
