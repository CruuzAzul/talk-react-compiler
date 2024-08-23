import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons/faWandMagicSparkles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useShowRerender } from "../utils/useShowRerender";
import "../styles/Devtools.css";
import { useEffect, useState } from "react";

export const Devtools = () => {
  const { setShowRerender } = useShowRerender();
  const [displayDevtools, setDisplayDevtools] = useState(false);

  const toggleRerender = () => {
    setShowRerender((showRerender: boolean) => !showRerender);
  };

  const toggleDevtools = () => {
    setDisplayDevtools((displayDevtools: boolean) => !displayDevtools);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "d") {
        toggleDevtools();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!displayDevtools) {
    return null;
  }

  return (
    <button className="devtools" onClick={toggleRerender}>
      <FontAwesomeIcon icon={faWandMagicSparkles} />
    </button>
  );
};
