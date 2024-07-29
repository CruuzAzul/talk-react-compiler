import { ChangeEvent, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { debounce } from "./utils/debounce";
import { IRelease } from "./types/musicbrainz.types";

const musicApiHeader = {
  Accept: "application/json",
  "User-Agent": "ReactCompiler/0.1 ( lucasaudart@gmail.com )",
};

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [musicList, setMusicList] = useState<string[]>([]);

  useEffect(() => {
    if (search !== "") {
      fetch(
        `http://musicbrainz.org/ws/2/release/?query=release:${search}&fmt=json`,
        {
          headers: musicApiHeader,
        }
      )
        .then((response) => response.json())
        .then((data: { releases: IRelease[] }) => {
          data.releases.forEach((release) => {
            fetch(`https://coverartarchive.org/release/${release.id}`)
              .then((response) => response.json())
              .then((data) => {
                if (data.images[0]) {
                  setMusicList((oldData) => [
                    ...oldData,
                    data.images[0].thumbnails.small,
                  ]);
                }
              });
          });
        });
    }
  }, [search]);

  const onChange = debounce(
    (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    500
  );

  return (
    <>
      <div>
        <input type="text" onChange={onChange} />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{musicList.length}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ul>
          {musicList.map((music) => (
            <li>
              <img src={music} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
