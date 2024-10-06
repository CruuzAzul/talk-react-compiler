import { Album } from "../types/Album";
import "../styles/AlbumCard.css";

interface AlbumCardProps {
  album: Album;
  isSelected?: boolean;
  onClick?: () => void;
}

export const AlbumCard = ({ album, isSelected, onClick }: AlbumCardProps) => {
  return (
    <button
      className={`album-card ${isSelected ? "selected" : ""} ${album.listened ? "listened" : ""}`}
      onClick={onClick}
      key={Math.random()}
    >
      <div
        className="image"
        style={{
          backgroundImage: `url(${album.thumbnail}), url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif)`,
        }}
      />
      <p>{album.name}</p>
    </button>
  );
};
