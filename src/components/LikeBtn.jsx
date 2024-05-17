"use client";
import Image from "next/image";
import styles from "../styles/SecondaryBtn.module.css";
import { useState } from "react";
export default function LikeBtn() {
  const [liked, setLiked] = useState(false);

  function handleliked() {
    setLiked((old) => !old);
  }
  return (
    <button className="likeBtn" onClick={handleliked}>
      <svg
        className={liked ? "active" : null}
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
  );
}
