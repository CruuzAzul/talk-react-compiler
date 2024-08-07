import { Models } from "appwrite";
import { Album } from "./Album";

export type Compil = {
  name: string;
  description: string | null;
  album: Album[];
} & Models.Document;
