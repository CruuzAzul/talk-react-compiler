import { ChangeEvent, useState } from "react";
import "./App.css";
import { debounce } from "./utils/debounce";
import { AlbumList } from "./components/AlbumList";

function App() {
  const [search, setSearch] = useState("");

  const onChange = debounce(
    (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    500
  );

  return (
    <>
      <h1 className="main-title">React Compiler</h1>
      <input className="search-input" type="text" onChange={onChange} />
      <AlbumList search={search} />
    </>
  );
}

export default App;
