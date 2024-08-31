import { IRelease } from "./../types/musicbrainz.types";

export const getCover = async (release: IRelease) => {
  return await fetch(`https://coverartarchive.org/release/${release.id}`)
    .then((response) => response.json())
    .then((data) => {
      return data.images[0];
    });
};
