import { Compil } from "../types/Compil";
import { database } from "./appwrite";
import { Server } from "./server";

export const getCompil = async (compilId: string) => {
  return database.getDocument<Compil>(
    Server.DatabaseId,
    Server.CompilCollectionId,
    compilId
  );
};
