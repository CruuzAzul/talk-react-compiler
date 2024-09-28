import { Album } from "../types/Album";
import "../styles/AlbumCard.css";

interface AlbumCardProps {
  album: Album;
  isSelected?: boolean;
  onClick?: () => void;
}

export const AlbumCard = ({ album, isSelected, onClick }: AlbumCardProps) => {
  const Component = onClick ? "button" : "div";

  return (
    <Component
      className={`album-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div
        className="image"
        style={{
          backgroundImage: `url(${album.thumbnail}), url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif)`,
        }}
      />
      <p>{album.name}</p>
    </Component>
  );
};
