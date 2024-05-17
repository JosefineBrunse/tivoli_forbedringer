import Image from "next/image";
import styles from "../styles/carroussel.css";
export default function Carroussel({ children, title }) {
  return (
    <section className="carroussel">
      <h3>{title}</h3>

      <div className="outercontainer">
        <div className="innercontainer">{children}</div>
      </div>
    </section>
  );
}
