import { useEffect, useState } from "react";
import "../styles/AlbumList.css";
import { CreateCompilButton } from "./CreateCompilButton";
import { Album } from "../types/Album";
import { AlbumCard } from "./AlbumCard";
import { getCover } from "../api/getCover";
import { getAlbums } from "../api/getAlbums";

interface AlbumListProps {
  search: string;
  resetSearch: () => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const AlbumList = ({
  search,
  resetSearch,
  setIsLoading,
}: AlbumListProps) => {
  const [albumList, setAlbumList] = useState<Album[]>([]);
  const [selectedAlbums, setSelectedAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const resetSearch = async () => {
      if (search !== "") {
        setAlbumList([]);
        setSelectedAlbums([]);
        setIsLoading(true);
        const releases = await getAlbums(search);
        setIsLoading(false);
        releases.forEach(async (release) => {
          const cover = await getCover(release);
          if (cover) {
            setAlbumList((oldData) => [
              ...oldData,
              {
                thumbnail: cover.thumbnails.small,
                artist: release["artist-credit"]?.[0].name ?? "",
                name: release.title,
                id: release.id,
              },
            ]);
          }
        });
      }
    };

    resetSearch();
  }, [search, setIsLoading]);

  const selectAlbum = (album: Album) => {
    if (selectedAlbums.includes(album)) {
      setSelectedAlbums(
        selectedAlbums.filter((albumIterator) => albumIterator.id !== album.id)
      );
    } else {
      setSelectedAlbums([...selectedAlbums, album]);
    }
  };

  return (
    <>
      <CreateCompilButton
        selectedAlbums={selectedAlbums}
        resetSearch={resetSearch}
      />
      <ul>
        {albumList.map((album) => (
          <li key={album.id} className="album">
            <AlbumCard
              album={album}
              isSelected={selectedAlbums.includes(album)}
              onClick={() => selectAlbum(album)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
