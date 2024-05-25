import Image from "next/image";
import styles from "../styles/PrimaryBtn.module.css";
export default function PrimaryBtn({ text, link, fill }) {
  return (
    <a
      className={`${styles.btnprimary} ${fill ? styles.fill : ""}`}
      href={link}
    >
      <p>{text}</p>

      <div className={styles.fill}></div>
    </a>
  );
}
