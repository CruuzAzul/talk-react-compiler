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

  useEffect(() => {
    const resetSearch = async () => {
      if (search !== "") {
        setAlbumList([]);
        setIsLoading(true);
        const releases = await getAlbums(search);
        setIsLoading(false);

        releases.forEach(async (release) => {
          try {
            const cover = await getCover(release);

            setAlbumList((oldData) => [
              ...oldData,
              {
                thumbnail: cover ? cover.thumbnails.small : "",
                artist: release["artist-credit"]?.[0].name ?? "",
                name: release.title,
                id: release.id,
                selected: false,
              },
            ]);
          } catch {
            setAlbumList((oldData) => [
              ...oldData,
              {
                thumbnail: "",
                artist: release["artist-credit"]?.[0].name ?? "",
                name: release.title,
                id: release.id,
                selected: false,
              },
            ]);
          }
        });
      }
    };

    resetSearch();
  }, [search, setIsLoading]);

  const selectAlbum = (album: Album) => {
    setAlbumList((oldData) =>
      oldData.map((oldAlbum) =>
        oldAlbum.id === album.id
          ? { ...oldAlbum, selected: !oldAlbum.selected }
          : oldAlbum
      )
    );
  };

  const selectedAlbums = albumList.filter((album) => album.selected);

  const onSearchReset = () => {
    setAlbumList([]);
    resetSearch();
  };

  return (
    <>
      {selectedAlbums.length > 0 && (
        <CreateCompilButton
          selectedAlbums={selectedAlbums}
          resetSearch={onSearchReset}
        />
      )}
      <ul>
        {albumList.map((album) => (
          <AlbumCard album={album} onClick={selectAlbum} key={album.id} />
        ))}
      </ul>
    </>
  );
};
