import { useShowRerender } from "../../utils/useShowRerender";
import "../../styles/Devtools.css";
import { useEffect } from "react";

export const Devtools = () => {
  const { setShowRerender } = useShowRerender();

  const toggleRerender = () => {
    setShowRerender((showRerender: boolean) => !showRerender);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "r") {
        toggleRerender();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};
