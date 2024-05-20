import Image from "next/image";
import styles from "../styles/PrimaryBtn.module.css";
export default function PrimaryBtn({ text, link }) {
  return (
    <a className={styles.btnprimary} href={link}>
      {text}
    </a>
  );
}
