import Image from "next/image";
import styles from "../styles/SecondaryBtn.module.css";
export default function SecondaryBtn({ text }) {
  return (
    <a className={styles.btnsecondary} href="#">
      {text}
    </a>
  );
}
