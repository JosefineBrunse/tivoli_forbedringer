import Image from "next/image";
import styles from "../styles/list.css";

export default function List({ children }) {
  return <div className="list">{children}</div>;
}
