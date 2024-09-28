import { Models } from "appwrite";
import { AlbumModel } from "./Album";

export type Compil = {
  name: string;
  description: string | null;
  album: AlbumModel[];
  like: number;
  dislike: number;
  createdById: string;
} & Models.Document;
