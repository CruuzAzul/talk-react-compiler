import { Compil } from "../types/Compil";
import { database } from "./appwrite";
import { Server } from "./server";

export const getCompils = async (queries?: string[]) => {
  return database.listDocuments<Compil>(
    Server.DatabaseId,
    Server.CompilCollectionId,
    queries
  );
};
