import { useEffect, useState } from "react";
import "../../styles/AlbumList.css";
import { Album } from "../../types/Album";
import { AlbumCard } from "./AlbumCard";
import { getCover } from "../../api/getCover";
import { getAlbums } from "../../api/getAlbums";
import { CreateCompilButton } from "./CreateCompilButton";

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
        setAlbumList(
          releases.map((release) => ({
            thumbnail:
              "https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif",
            artist: release["artist-credit"]?.[0].name ?? "",
            name: release.title,
            id: release.id,
            selected: false,
          }))
        );
        setIsLoading(false);

        releases.forEach(async (release) => {
          let thumbnail;

          try {
            thumbnail = (await getCover(release)).thumbnails.small;
          } catch {
            thumbnail = "";
          }

          setAlbumList((oldData) =>
            oldData.map((currentRelease) =>
              currentRelease.id === release.id
                ? {
                    ...currentRelease,
                    thumbnail,
                  }
                : currentRelease
            )
          );
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
