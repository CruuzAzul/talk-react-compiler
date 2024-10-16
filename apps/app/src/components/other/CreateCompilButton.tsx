import { Album } from "../../types/Album";
import { createCompil } from "../../api/createCompil";
import { useState } from "react";
import { useAccount } from "../../utils/useAccount";
import "../../styles/CreateCompilButton.css";
import { Input } from "./Input";

interface CreateCompilButtonProps {
  selectedAlbums: Album[];
  resetSearch: () => void;
}

export const CreateCompilButton = ({
  selectedAlbums,
  resetSearch,
}: CreateCompilButtonProps) => {
  const [name, setName] = useState("");
  const { user } = useAccount();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createCompil(
      selectedAlbums.map((album) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { selected, ...rest } = album;
        return rest;
      }),
      name,
      user!.$id
    );
    resetSearch();
    setName("");
  };

  return (
    <form onSubmit={onSubmit} className="form-compil">
      <label>
        Compilation Name :
        <Input
          className="input"
          type="text"
          onChange={(e) => setName(e.currentTarget.value)}
          value={name}
        />
      </label>
      <button className="create-compil-button" type="submit" disabled={!name}>
        Create Compilation
      </button>
    </form>
  );
};
