import { Album } from "../types/Album";
import { createCompil } from "../api/createCompil";
import { useState } from "react";

interface CreateCompilButtonProps {
  selectedAlbums: Album[];
}

export const CreateCompilButton = ({
  selectedAlbums,
}: CreateCompilButtonProps) => {
  const [name, setName] = useState("");

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
        onClick={() => createCompil(selectedAlbums, name)}
      >
        Create Compilation
      </button>
    </>
  );
};
