import { ChangeEvent, useRef, useState } from "react";
import "./App.css";
import { debounce } from "./utils/debounce";
import { AlbumList } from "./components/AlbumList";
import { Input } from "./components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const resetSearch = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSearch("");
  };

  const onChange = debounce(
    (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    500
  );

  const endSlot = isLoading ? (
    <FontAwesomeIcon icon={faSpinner} className="rotating" />
  ) : null;

  return (
    <>
      <h1 className="main-title">React Compiler</h1>
      <Input
        className="search-input"
        type="text"
        onChange={onChange}
        placeholder="Search by Artist Name"
        ref={inputRef}
        endSlot={endSlot}
      />
      <AlbumList
        search={search}
        resetSearch={resetSearch}
        setIsLoading={setIsLoading}
      />
    </>
  );
}

export default App;
