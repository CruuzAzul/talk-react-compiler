import { useEffect, useState } from "react";
import { IRelease } from "../types/musicbrainz.types";
import "../styles/AlbumList.css";
import { CreateCompilButton } from "./CreateCompilButton";
import { Album } from "../types/Album";

const musicApiHeader = {
  Accept: "application/json",
  "User-Agent": "ReactCompiler/0.1 ( lucasaudart@gmail.com )",
};

interface AlbumListProps {
  search: string;
}

export const AlbumList = ({ search }: AlbumListProps) => {
  const [albumList, setAlbumList] = useState<Album[]>([]);
  const [selectedAlbums, setSelectedAlbums] = useState<Album[]>([]);

  useEffect(() => {
    if (search !== "") {
      fetch(
        `http://musicbrainz.org/ws/2/release/?query=release:${search}&fmt=json`,
        {
          headers: musicApiHeader,
        }
      )
        .then((response) => response.json())
        .then((data: { releases: IRelease[] }) => {
          data.releases.forEach((release) => {
            fetch(`https://coverartarchive.org/release/${release.id}`)
              .then((response) => response.json())
              .then((data) => {
                if (data.images[0]) {
                  setAlbumList((oldData) => [
                    ...oldData,
                    {
                      thumbnail: data.images[0].thumbnails.small,
                      artist: release["artist-credit"]?.[0].name ?? "",
                      name: release.title,
                      id: release.id,
                    },
                  ]);
                }
              });
          });
        });
    }
  }, [search]);

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
      <CreateCompilButton selectedAlbums={selectedAlbums} />
      <ul>
        {albumList.map((album) => (
          <li key={album.id} className="album">
            <button
              className={selectedAlbums.includes(album) ? "selected" : ""}
              onClick={() => selectAlbum(album)}
            >
              <img src={album.thumbnail} />
              <p>
                {album.name} - {album.artist}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
