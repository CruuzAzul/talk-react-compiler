import { Album } from "../../types/Album";
import "../../styles/AlbumCard.css";
import { useShowRerender } from "../../utils/useShowRerender";
import { useRenderCount } from "@uidotdev/usehooks";
import ImageFallback from "../../assets/images/ram.webp?url";

interface AlbumCardProps {
  album: Album;
  onClick?: (album: Album) => void;
}

export const AlbumCard = ({ album, onClick }: AlbumCardProps) => {
  const { showRerender } = useShowRerender();
  const rerender = useRenderCount();
  const imageUrl = album.thumbnail || ImageFallback;

  return (
    <li className="album">
      <button
        className={`album-card ${album.selected ? "selected" : ""} ${album.listened ? "listened" : ""}`}
        onClick={() => onClick?.(album)}
      >
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl}), url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif)`,
          }}
        />
        <p>{album.name}</p>
        {showRerender && (
          <button className="rerender-button">{rerender}</button>
        )}
      </button>
    </li>
  );
};

// export const AlbumCard = React.memo(AlbumCardNotMemoized);
