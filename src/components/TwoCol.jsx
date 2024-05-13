import Image from "next/image";
import styles from "../styles/grid.css";
export default function TwoCol({ children }) {
  return <section className="gridtwocol">{children}</section>;
}
