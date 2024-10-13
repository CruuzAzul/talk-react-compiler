import { Album } from "../types/Album";
import "../styles/AlbumCard.css";
import { useShowRerender } from "../utils/useShowRerender";
import { useRenderCount } from "@uidotdev/usehooks";

interface AlbumCardProps {
  album: Album;
  onClick?: (album: Album) => void;
}

export const AlbumCard = ({ album, onClick }: AlbumCardProps) => {
  const { showRerender } = useShowRerender();
  const rerender = useRenderCount();

  const date = new Date();

  return (
    <li className="album">
      {date.toISOString()}
      <button
        className={`album-card ${album.selected ? "selected" : ""} ${album.listened ? "listened" : ""}`}
        onClick={() => onClick?.(album)}
      >
        <div
          className="image"
          style={{
            backgroundImage: `url(${album.thumbnail}), url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif)`,
          }}
        />
        <p>{album.name}</p>
        {showRerender && <button>🔃 {rerender}</button>}
      </button>
    </li>
  );
};

// export const AlbumCard = React.memo(AlbumCardNotMemoized);
