import Image from "next/image";
import styles from "../styles/PrimaryBtn.module.css";

export default function SpotifyEmbed({ src }) {
  return (
    <iframe
      src={src}
      width="100%"
      height="600"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
