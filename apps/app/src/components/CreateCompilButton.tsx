import { Album } from "../types/Album";
import { createCompil } from "../api/createCompil";
import { useState } from "react";
import { useAccount } from "../utils/useAccount";

interface CreateCompilButtonProps {
  selectedAlbums: Album[];
}

export const CreateCompilButton = ({
  selectedAlbums,
}: CreateCompilButtonProps) => {
  const [name, setName] = useState("");
  const { user } = useAccount();

  return (
    <>
      <label>
        Name :
        <input
          className="name=input"
          type="text"
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </label>
      <button
        className="create-compil-button"
        onClick={() => createCompil(selectedAlbums, name, user!.$id)}
      >
        Create Compilation
      </button>
    </>
  );
};
