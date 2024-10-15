import { Compil } from "../types/Compil";
import "../styles/CompilCard.css";
import { CSSProperties, MouseEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { dislikeCompil, likeCompil } from "../api/updateCompil";
import { Link } from "@tanstack/react-router";
import { useRenderCount } from "@uidotdev/usehooks";
import { useShowRerender } from "../utils/useShowRerender";

interface CompilCardProps {
  compil: Compil;
}

export const CompilCard = ({ compil }: CompilCardProps) => {
  const { showRerender } = useShowRerender();
  const rerender = useRenderCount();
  const [likeCount, setLikeCount] = useState(compil.like);
  const [dislikeCount, setDislikeCount] = useState(compil.dislike);

  const like = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    likeCompil(compil.$id, likeCount);
    setLikeCount(likeCount + 1);
  };

  const dislike = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dislikeCompil(compil.$id, dislikeCount);
    setDislikeCount(dislikeCount + 1);
  };

  const rightImage = compil.album?.[0]?.thumbnail ?? "public/images/ram.webp";
  const leftImage = compil.album?.[1]?.thumbnail ?? "public/images/ram.webp";
  const centerImage = compil.album?.[2]?.thumbnail ?? "public/images/ram.webp";

  return (
    <Link
      className="compil-card"
      to="/compil/$compilId"
      params={{ compilId: compil.$id }}
    >
      <div className="photo-stack-container">
        <div
          className="photo-stack"
          style={
            {
              "--left-image": `url(${leftImage}), url(public/images/ram.webp)`,
              "--right-image": `url(${rightImage}), url(public/images/ram.webp)`,
              "--center-image": `url(${centerImage}), url(public/images/ram.webp)`,
            } as CSSProperties
          }
        />
      </div>
      <h2 className="compil-card-title">{compil.name}</h2>
      <div className="button-group">
        <button className="like-button" onClick={like}>
          <FontAwesomeIcon icon={faThumbsUp} />
          {likeCount}
        </button>
        <button className="like-button" onClick={dislike}>
          <FontAwesomeIcon icon={faThumbsDown} />
          {dislikeCount}
        </button>
        {showRerender && (
          <button className="rerender-button">{rerender}</button>
        )}
      </div>
    </Link>
  );
};
