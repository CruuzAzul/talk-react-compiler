import "../styles/AlbumDetailsList.css";
import { AlbumModel } from "../types/Album";
import { AlbumCard } from "./AlbumCard";

interface AlbumDetailsListProps {
  albums: AlbumModel[];
}

export const AlbumDetailsList = ({ albums }: AlbumDetailsListProps) => {
  return (
    <ul className="album-details-list">
      {albums.map((album) => (
        <li className="album-details">
          <AlbumCard album={album} />
        </li>
      ))}
    </ul>
  );
};
