"use client";
import Image from "next/image";
import styles from "../styles/ArtistCard.css";
import SecondaryBtn from "./SecondaryBtn";
import LikeBtn from "./LikeBtn";
import Link from "next/link";
export default function ArtistPosterCard(props) {
  const date = new Date(props.time);

  const options = { day: "2-digit", month: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-GB", options);

  return (
    <Link
      href={"/event/" + props.slug}
      className={"artistcard poster " + props.tag}
    >
      <h3>{props.name}</h3>

      <p className={"time " + props.tag}>{formattedDate}</p>
    </Link>
  );
}
