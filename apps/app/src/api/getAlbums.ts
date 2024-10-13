import { IRelease } from "../types/musicbrainz.types";

const musicApiHeader = {
  Accept: "application/json",
  "User-Agent": "ReactCompiler/0.1 ( lucasaudart@gmail.com )",
};

export const getAlbums = async (search: string) => {
  return await fetch(
    `https://musicbrainz.org/ws/2/release/?query=artist:${search}&fmt=json`,
    {
      headers: musicApiHeader,
    }
  )
    .then((response) => response.json())
    .then((data: { releases: IRelease[] }) => {
      return data.releases;
    });
};
