import { Models } from "appwrite";
export interface Album {
  thumbnail: string;
  id: string;
  name: string;
  artist: string;
}

export interface AlbumModel extends Album, Models.Document {}
