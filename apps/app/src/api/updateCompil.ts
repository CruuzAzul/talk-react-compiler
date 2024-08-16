import { database } from "./appwrite";
import { Server } from "./server";

export const likeCompil = (compilId: string, likes: number) => {
  database.updateDocument(
    Server.DatabaseId,
    Server.CompilCollectionId,
    compilId,
    {
      like: likes + 1,
    }
  );
};

export const dislikeCompil = (compilId: string, dislike: number) => {
  database.updateDocument(
    Server.DatabaseId,
    Server.CompilCollectionId,
    compilId,
    {
      dislike: dislike + 1,
    }
  );
};
