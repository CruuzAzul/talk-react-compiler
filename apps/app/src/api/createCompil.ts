import { ID } from "appwrite";
import { database } from "./appwrite";
import { Album } from "../types/Album";
import { Server } from "./server";

export const createCompil = (
  selectedAlbums: Album[],
  name: string,
  userId: string
) => {
  database.createDocument(
    Server.DatabaseId,
    Server.CompilCollectionId,
    ID.unique(),
    {
      album: selectedAlbums,
      name,
      createdById: userId,
    }
  );
};
