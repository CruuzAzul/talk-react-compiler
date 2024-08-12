import { Compil } from "../types/Compil";
import { database } from "./appwrite";
import { Server } from "./server";

export const getCompils = async () => {
  return database.listDocuments<Compil>(
    Server.DatabaseId,
    Server.CompilCollectionId
  );
};
