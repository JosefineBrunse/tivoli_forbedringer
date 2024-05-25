import Image from "next/image";
import styles from "../styles/SecondaryBtn.module.css";
export default function SecondaryBtn({ text, link }) {
  return (
    <a className={styles.btnsecondary} href={link}>
      <p>{text}</p>

      <div className={styles.fill}></div>
    </a>
  );
}
