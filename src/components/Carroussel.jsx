import Image from "next/image";
import styles from "../styles/carroussel.css";

import localFont from "next/font/local";
const myFont = localFont({
  src: "/../../public/typografi/DomaineDisplayWeb-Black.woff2",
});
export default function Carroussel({ children, title }) {
  return (
    <section className="carroussel">
      <h3 className={`${myFont.className}`}>{title}</h3>

      <div className="outercontainer">
        <div className="innercontainer">{children}</div>
      </div>
    </section>
  );
}
