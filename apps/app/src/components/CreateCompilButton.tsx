import { Album } from "../types/Album";
import { createCompil } from "../api/createCompil";

interface CreateCompilButtonProps {
  selectedAlbums: Album[];
}

export const CreateCompilButton = ({
  selectedAlbums,
}: CreateCompilButtonProps) => {
  return (
    <button
      className="create-compil-button"
      onClick={() => createCompil(selectedAlbums)}
    >
      Create Compilation
    </button>
  );
};
