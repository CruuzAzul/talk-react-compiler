import { useState } from "react";
import "../../styles/AlbumDetailsList.css";
import { AlbumModel } from "../../types/Album";
import { AlbumCard } from "./AlbumCard";

interface AlbumDetailsListProps {
  albums: AlbumModel[];
}

export const AlbumDetailsList = ({ albums }: AlbumDetailsListProps) => {
  const [albumsList, setAlbumsList] = useState(
    albums.map((album) => ({ ...album, listened: false }))
  );

  const onListened = (albumId: string) => {
    setAlbumsList(
      albumsList.map((album) =>
        album.id === albumId ? { ...album, listened: !album.listened } : album
      )
    );
  };

  return (
    <ul className="album-details-list">
      {albumsList.map((album) => (
        <li className="album-details" key={album.$id}>
          <AlbumCard album={album} onClick={() => onListened(album.id)} />
        </li>
      ))}
    </ul>
  );
};
