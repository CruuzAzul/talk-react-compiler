import { Models } from "appwrite";
export interface Album {
  thumbnail: string;
  id: string;
  name: string;
  artist: string;
  listened?: boolean;
}

export interface AlbumModel extends Album, Models.Document {}
